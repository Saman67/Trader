var config  = require('../config/config');
var OANDA = require('./oanda');
var moment = require("moment");

var squel = require("squel");
var async = require('async');
var db = require('./config/mySql');


var start = "2014-01-01"; // moment().subtract(365,'d').format('YYYY-MM-DD');
var end = moment().add(2, 'd').format("YYYY-MM-DD");
const pip = 0.0001;

var instrument = OANDA.instruments.EUR_USD.instrument;

var query = squel.select()
    .field("AVG(closeAsk)")
    .field("MIN(closeAsk)")
    .field("MAX(closeAsk)")
    .from("instruments")
    .where("instrument", instrument)
    //.order("time")
    .toString();

db.query(query, function(err, result) {
    if (err)
        ;
});

function checkInstrument(data) {
    var avg = 0, side, takeProfit, stopLoss;
    var lastPrice = {
        ask: data.lastCloseAsk,
        bid: data.lastCloseBid
    };

    data.avgCloseAsk

    // Current direction = last 10 avg line
    var gg = candles[candles.length - 1].closeAsk,
        tt = candles[candles.length - 11].closeAsk,
        direction = (tt - gg) < 0 ? 'down' : 'up';

// If Current Direction is toward absolute average value
// Buy or Sell based on direction
    if (direction === 'down' && lastPrice.bid > avg) {
        side = 'sell';
        takeProfit = lastPrice.bid - (10 * pip);
        stopLoss = lastPrice.bid + (30 * pip);
    }
    else if (direction === 'up' && lastPrice.ask < avg) {
        side = 'buy';
        takeProfit = lastPrice.ask + (10 * pip);
        stopLoss = lastPrice.ask - (30 * pip);
    }

    var grossProfit = estimateGrossTradeProfit(lastPrice.ask, lastPrice.bid, data.units, 10);
    if (grossProfit <= 0) {
        log.info('\tSkipping instrument. Estimated value ' + grossProfit + ' is lower than minimum.');
        return null;
    }

    return side ? {
        instrument: data.instrument,
        units: data.units,
        avg,
        direction,
        side,
        lastPrice,
        takeProfit,
        stopLoss
    } : null;
}


function calculateOandaCharges(priceAsk, priceBid, units) {
    var midPoint = (priceAsk + priceBid) / 2;
    var spreadCost = (priceAsk - midPoint) * units;
    var commissionCost = 5 * units / 100000;
    var charges = spreadCost + commissionCost;
    return charges;
}

function calculateOandaProfit(price, units, targetedPips) {
    var value = units * price;
    var instrumentPerPipValue = value * 0.0001;
    var closePrice = price + (targetedPips * pip);
    var profit = instrumentPerPipValue / closePrice * targetedPips;
    return profit;
}

function estimateGrossTradeProfit(priceAsk, priceBid, units, targetedPips) {
    var midPrice = (priceAsk + priceBid)/2;
    var charges = calculateOandaCharges(priceAsk, priceBid, units);
    var profit = calculateOandaProfit(midPrice, units, targetedPips);
    return profit - charges;
}