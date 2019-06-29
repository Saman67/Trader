var config  = require('../config/config');
var log = config.logger;
const pip = 0.0001;


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