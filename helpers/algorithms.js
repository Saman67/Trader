var OANDAAdapter = require('oanda-adapter');
var config  = require('../config/config');
var log = config.logger;
var OANDA = require('./oanda');
var moment = require("moment");
var OandaClient = new OANDAAdapter({
    environment: config.oanda.environment,
    accessToken: config.oanda.accessToken
});
var start = "2014-01-01"; // moment().subtract(365,'d').format('YYYY-MM-DD');
var end = moment().add(2, 'd').format("YYYY-MM-DD");
var scale = 'D';
var selections = [];        // Selected algorithm will decide which one of the instruments is good to trade
const pip = 0.0001;

exports.runAlgorithm = function(settings, selectedInstruments, newOrderCount, orderInstrumentCallback, executionCompletedCallback)
{
    var randIndex = Math.floor(Math.random() * (selectedInstruments.length - 1));
    var instrument = selectedInstruments[randIndex];
    selectedInstruments.splice(randIndex, 1);

    OandaClient.getCandles(instrument, start, end, scale, function(error, candles)
    {
        if (error) {
            if(selectedInstruments.length <= 0 || selections.length >= newOrderCount)
                executionCompletedCallback(selections);
            return log.error(error);
        }

        log.info('Scanning currency: ' + instrument);

        var data = { instrument, units: settings.unitsPerTrade };

        var result = exports.algorithms[settings.algorithmId].func(candles, data);

        if(result) {
            selections.push(result);
            orderInstrumentCallback(result);
        }

        if(selectedInstruments.length > 0 && selections.length < newOrderCount)
            exports.runAlgorithm(settings, selectedInstruments, newOrderCount, orderInstrumentCallback,
                executionCompletedCallback);
        else
            executionCompletedCallback(selections);
    });
};

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

exports.algorithms = {

    average_value: {
        id: "average_value",
        name: "Average Value",
        description: "Movement toward the average value. Direction (last 10 candles) must be toward the absolute average value.",
        func: function (candles, data) {
            var avg = 0, side, takeProfit, stopLoss;
            var lastPrice = {
                ask: candles[candles.length - 1].closeAsk,
                bid: candles[candles.length - 1].closeBid
            };

            // Find Absolute Average Value
            for (var i = 0; i < candles.length; i++)
                avg += candles[i].closeAsk;
            avg = avg / candles.length;

            // Current direction = last 10 avg line
            var gg = candles[candles.length - 1].closeAsk,
                tt = candles[candles.length - 11].closeAsk,
                direction = (tt - gg) < 0 ? 'down' : 'up';

            // If Current Direction is toward absolute average value
            // Buy or Sell based on direction
            if(direction === 'down' && lastPrice.bid > avg) {
                side = 'sell';
                takeProfit = lastPrice.bid - (10 * pip);
                stopLoss = lastPrice.bid + (30 * pip);
            }
            else if(direction === 'up' && lastPrice.ask < avg) {
                side = 'buy';
                takeProfit = lastPrice.ask + (10 * pip);
                stopLoss = lastPrice.ask - (30 * pip);
            }

            var grossProfit = estimateGrossTradeProfit(lastPrice.ask, lastPrice.bid, data.units, 10);
            if(grossProfit <= 0) {
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
            }: null;
        }
    }
};