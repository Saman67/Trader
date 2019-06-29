process.env.NODE_ENV = 'development';
var squel = require("squel");
var async = require('async');
var moment = require("moment");
var OANDAAdapter = require('oanda-adapter');
var config = require('../config/config');
var OANDA = require('../helpers/oanda');
var db = require('../config/mySql');
var algorithms = require('./algorithms').algorithms;
var OandaClient = new OANDAAdapter({
    environment: config.oanda.environment,
    accessToken: config.oanda.accessToken
});

var portfolio = {
    balance: 5000000,
    openTrades: {
        instrument: '',     // 'USD_EUR'
        type: '',           // buy || sell
        volume: '',
        executionPrice: '',
        executionDate: ''
    },
    orderHistory: [
        {
            type: '',      // buy || sell
            symbol: '',
            volume: '',
            orderPrice: '',
            orderDate: '',
            executionPrice: '',
            executionDate: '',
            closePrice: '',
            gain: ''
        }
    ]
};

var instrumentStats = {
    absMinCloseBid: Infinity,
    absMaxCloseBid: 0
};

var period = 20;


var order = function (req, res) {

    if (!req.query.type || !req.query.symbol || !req.query.action || !req.query.volume)
        return res.end('Missing parameters!');

    if (!Quandl.WIKI[req.query.symbol] || !OANDA.instruments[req.query.symbol])
        return res.end('Incorrect symbol!');

    if (!req.query.date)
        req.query.date = new Date();

    var symbol = req.query.symbol,
        type = req.query.type,
        action = req.query.action,
        volume = req.query.volume,
        date = new Date(req.query.date);

    var actualOrderPrice = getSymbolPrice(type, symbol, action);
    var gain = 0;
    var cost = 0;

    // Default data for new order to be placed
    // This may change depending on existing open orders
    var newOrder = {
        type: type,
        symbol: symbol,
        volume: volume,
        executionPrice: actualOrderPrice,
        executionDate: date
    };

    // Check if there exists any open order for this symbol
    if (portfolio.openTrades[symbol]) {
        var currentTrade = portfolio.openTrades[symbol];

        // If similar symbol orders are both buy or both sell
        if (currentTrade.action === newOrder.action) {
            var totalVolume = currentTrade.volume + newOrder.volume;
            var newPrice = (currentTrade.volume * currentTrade.executionPrice + newOrder.volume * newOrder.executionPrice) / totalVolume;
            newOrder.executionPrice = newPrice;
            newOrder.volume = totalVolume;

            // Calculate the cost of order
            // When we buy or sell something we don't have
            if (newOrder.action === 'buy')
                cost = newOrder.volume * newOrder.executionPrice;  // + commission and fees

            // Calculate cost of order
            if (newOrder.action === 'sell')
                ;//gain =
        }
        else {
            // Buy & Sell
            var currentVolume = (currentTrade.action === 'sell') ? -currentTrade.volume : currentTrade.volume;
            var orderVolume = (orderTrade.action === 'sell') ? -orderTrade.volume : orderTrade.volume;
            var newVolume = currentVolume + orderVolume;
            gain = orderTrade.volume * (actualOrderPrice - currentTrade.executionPrice);

            if (newVolume > 0) {
                // New buy bigger than current sell
                // remaining in portfolio is buy order
                orderTrade.action = 'buy';
                orderTrade.executionPrice = currentTrade.executionPrice;
            }
            else if (newVolume < 0) {
                // New sell bigger than current buy
                orderTrade.action = 'sell';
                orderTrade.executionPrice = currentTrade.executionPrice;

                var totalVolume = currentTrade.volume + newOrder.volume;
                var newPrice = (currentTrade.volume * currentTrade.executionPrice + newTrade.volume * newTrade.executionPrice) / totalVolume;
                orderTrade.executionPrice = newPrice;
                orderTrade.volume = totalVolume;
            }
            else if (newVolume === 0) {
                // Equal sell and buy volume
                // Close the trade
                orderTrade = null;
            }
        }
    }

    // Check user has enough balance to make the transaction
    if (portfolio.balance >= cost) {
        portfolio.balance = portfolio.balance + gain - cost;

        if (orderTrade == null)
            delete portfolio.openTrades[symbol];
        else
            portfolio.openTrades[symbol] = orderTrade;

        portfolio.orderHistory.push({
            type: type,
            action: action,
            symbol: symbol,
            volume: volume,
            orderPrice: actualOrderPrice,
            orderDate: date,
            executionPrice: actualOrderPrice,
            executionDate: date,
            gain: gain
        });

        res.json({status: 'success', portfolio});
    }
    else {
        res.json({status: 'failed', message: 'Available balance is less than order price!', portfolio});
    }
};


var runSimulator = function (startDate, algorithmId) {
    startDate = moment('startDate', 'MM-DD-YYYY');

    var instrument = OANDA.instruments.USD_CAD.instrument;
    var TradeData = {
        instrument
    };

    var query = squel.select()
        .from("instruments")
        .where("instrument = '" + instrument + "'")
        .order("time")
        .toString();

    db.query(query, function(err, candles) {
        if (err) return;

        candles.forEach(function(candle, i){
            updateStatistics(candle);

            if(i<period)
                return;


            var history = candles.slice(i - period, i);
            algorithms[algorithmId].func(history, TradeData)
        })
    });

};

function updateStatistics(candle) {

    if(instrumentStats.absMinCloseBid > candle.closeBid)
        instrumentStats.absMinCloseBid = candle.closeBid;
    else if (instrumentStats.absMaxCloseBid < candle.closeBid)
        instrumentStats.absMaxCloseBid = candle.closeBid;


    // {
    //     "instrument": "USD_CAD",
    //     "time": 1041451200000000,
    //     "volume": 2,
    //     "openBid": 1.5725,
    //     "openAsk": 1.5735,
    //     "highBid": 1.5725,
    //     "highAsk": 1.5735,
    //     "lowBid": 1.5725,
    //     "lowAsk": 1.5735,
    //     "closeBid": 1.5725,
    //     "closeAsk": 1.5735
    // }
}



runSimulator('01-01-2017', algorithms.average_value.id);