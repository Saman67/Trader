process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var OANDAAdapter = require('oanda-adapter');
var config  = require('./config/config');
var OANDA = require('./helpers/oanda');
var moment = require("moment");

var OandaClient = new OANDAAdapter({
    environment: config.oanda.environment,
    accessToken: config.oanda.accessToken
});


var start = "2010-01-01"; // moment().subtract(365,'d').format('YYYY-MM-DD');
var end = moment().add(2, 'd').format("YYYY-MM-DD");
var scale = 'D';

var instruments = Object.keys(OANDA.instruments);

checkInstrument(0);

var selection = [];



function checkInstrument(index) {
    var instrument = instruments[index];

    OandaClient.getCandles(instrument, start, end, scale, function(error, candles)
    {
        if (error)
            return console.log(error);

        console.log('Scanning currency: ' + instrument);

        var avg = 0, side, lastPrice = candles[candles.length - 1].closeAsk;

        // Find Absolute Average Value
        for (var i = 0; i < candles.length; i++)
        {
            avg += candles[i].closeAsk;
        }
        avg = avg / candles.length;

        // Current direction = last 10 avg line
        var gg = candles[candles.length - 1].closeAsk,
            tt = candles[candles.length - 11].closeAsk,
            direction = (tt - gg) < 0 ? 'down' : 'up';


        // If Current Direction is toward absolute average value
        // Buy or Sell based on direction
        if(direction === 'down' && lastPrice > avg)
            side = 'sell';
        else if(direction === 'up' && lastPrice < avg)
            side = 'buy';

        selection.push({
            instrument,
            avg,
            direction,
            side,
            lastPrice
        });

        if(++index < instruments.length)
            checkInstrument(index);
    });
}