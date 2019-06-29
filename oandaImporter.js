process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var OANDAAdapter = require('oanda-adapter');
var config  = require('./config/config');
var OANDA = require('./helpers/oanda');
var moment = require("moment");
var squel = require("squel");
var async = require('async');
var db = require('./config/mySql');
var OandaClient = new OANDAAdapter({
    environment: config.oanda.environment,
    accessToken: config.oanda.accessToken
});
var scale = 'H1';
var period = 6000;
var  counter = 0;

console.log("Starting the import at " + moment().toString());

// create a queue object with concurrency 2
var q = async.queue(function (task, callback) {
    OandaClient.getCandles(task.instrument, task.start, task.lastDate, task.scale, function (error, candles) {

        if (error)
            return console.log(error);

        if(candles.length <= 0) {
            console.log("\tApi returned empty list. Skipping current period!");
            return callback();
        }

        var rows = [];
        candles.forEach((candle) => {
            rows.push({
                "instrument": task.instrument,
                "time": candle.time,
                "openBid": candle.openBid,
                "openAsk": candle.openAsk,
                "highBid": candle.highBid,
                "highAsk": candle.highAsk,
                "lowBid": candle.lowBid,
                "lowAsk": candle.lowAsk,
                "closeBid": candle.closeBid,
                "closeAsk": candle.closeAsk,
                "volume": candle.volume
            });
        });

        var query = squel.insert().into("instruments").setFieldsRows(rows).toString().replace('INSERT', 'REPLACE'); //'INSERT IGNORE');
        db.query(query, function(err, result) {
            if(err) {
                console.log(err);
            }
            else {
                counter += rows.length;
                console.log("\t" + result.affectedRows + " new records added/updated.");
                console.log();

                callback();
            }
        });
    });
}, 1);

q.drain = function() {
    // All queue tasks are completed
    console.log("Import ended at " + moment().toString());
    console.log("\t" + counter + " total records imported.");
};



Object.keys(OANDA.instruments).forEach((key)=>{
    if (!OANDA.instruments.hasOwnProperty(key))
        return;

    var start = moment("2017-10-07", "YYYY-MM-DD");
    var end = moment();//"2010-01-01", "YYYY-MM-DD");

    var lastDate = start.clone();
    lastDate.add(period, 'hours');
    // var end = moment();

    var instrument = OANDA.instruments[key].instrument;
    while(start.isBefore(end)) {
        q.push({instrument, start: start.toString(), lastDate: lastDate.toString(), scale}, () => {});

        start = lastDate.clone();
        lastDate.add(period, 'hours');
    }
});

