var fs = require('fs');
var OANDAAdapter = require('oanda-adapter');
var config  = require('../config/config');
var log = config.logger;
var OANDA = require('../helpers/oanda');
var algorithms = require('../helpers/algorithms');
var moment = require("moment");
var async = require("async");

var OandaClient = new OANDAAdapter({
    environment: config.oanda.environment,
    accessToken: config.oanda.accessToken
});


var traderIntervalObj = null;
var traderIsExcutingTasks = false;


if(readSettings().status === 'Started' && !traderIntervalObj)
    startAutoTrader();

exports.saveSettings = function (req, res) {
    if(!req.body || !req.body.status)
        return res.end('Incorrect parameters!');

    var userSettings = req.body;
    var settings = Object.assign({}, getDefaultSettings(), userSettings);

    if(settings.status === 'Started' && !traderIntervalObj)
        startAutoTrader();
    else if(settings.status === 'Stopped' && traderIntervalObj)
        stopAutoTrader();

    fs.writeFile(config.settingsPath, JSON.stringify(settings), () => {
        res.end('All settings are saved.');
    });
};

exports.getSettings = function (req, res) {
    res.json(readSettings());
};

function readSettings() {
    var userSettings = {};
    if(fs.existsSync(config.settingsPath))
        userSettings = JSON.parse(fs.readFileSync(config.settingsPath, 'utf8'));
    else
        fs.writeFile(config.settingsPath, "{}");

    var settings = Object.assign(getDefaultSettings(), userSettings);
    return settings;
};

function getDefaultSettings() {
    var defaultSettings = {
        status: 'Stopped',
        period: 10,
        maxOpenTrade: 10,
        unitsPerTrade: 100,
        maxMargin: 0.5,
        algorithmId: algorithms.algorithms.average_value.id,
        instruments: []
    };
    return defaultSettings;
};

function startAutoTrader() {
    if(traderIntervalObj)
        clearInterval(traderIntervalObj);

    traderIntervalObj = setInterval(autoTrader, readSettings().period * 60000);
    autoTrader();
};

function stopAutoTrader() {
    if(traderIntervalObj)
        clearInterval(traderIntervalObj);
    traderIntervalObj = null;
};

function autoTrader() {
    if(traderIsExcutingTasks)
        return log.info('Trader is busy: Skipping current interval. ' + new Date());

    traderIsExcutingTasks = true;
    log.info('Auto trader executed: ' + new Date());

    var settings = readSettings();

    // Get all basic account data then lunch trader
    async.parallel({
        account: function(callback) {
            OandaClient.getAccount(config.oanda.accountId, function (err, account) {
                callback(err, account);
            });
        },
        trades: function(callback) {
            OandaClient.getOpenTrades(config.oanda.accountId, function (err, trades) {
                callback(err, trades);
            });
        }
    },
    function(err, data) {

        if(!data || !data.trades) {
            log.info('\tError happened. Data is empty!');
            return executionCompleted();
        }
        // Limit the number of open trades
        else if(data.trades.length >= settings.maxOpenTrade) {
            log.info('\tReached maximum open trades.');
            return executionCompleted();
        }

        // Remove pairs that have open position
        var newInstruments = [];
        settings.instruments.forEach((instrument) => {
            var exist = false;
            data.trades.forEach((trade) => {
                if(trade.instrument === instrument)
                    exist = true;
            });

            if(!exist)
                newInstruments.push(instrument);
        });

        log.info('\tSelecting a new order ...');

        var newOrderCount = settings.maxOpenTrade - data.trades.length;

        algorithms.runAlgorithm(settings, newInstruments, newOrderCount, orderInstrument, executionCompleted);

    });
};

function orderInstrument(selection) {

    var order = {
        instrument: selection.instrument,
        units: selection.units,
        side: selection.side,           // buy or sell
        type: 'market',     // The type of the order limit, stop, marketIfTouched or market
        takeProfit: selection.takeProfit     // Optional. The take profit price.
        // expiry: '',         // If order type is limit, stop, or marketIfTouched. The value specified must be in a valid datetime format
        // price: '',          // If order type is limit, stop, or marketIfTouched. The price where the order is set to trigger at.
        // lowerBound: '',     // Optional. The minimum execution price.
        // upperBound: '',     // Optional. The maximum execution price.
        //stopLoss: selection.stopLoss,       // Optional. The stop loss price.
        // trailingStop: '',   // Optional The trailing stop distance in pips, up to one decimal place.
    };

    OandaClient.createOrder(config.oanda.accountId, order, (error, confirmation) => {
        if(error)
            return log.error('Error: ' + JSON.stringify(selection));
        log.info(['\tNew order placed:', order.side, order.instrument, order.number].join(' '));
    });
};

function executionCompleted(selections) {
    // Set delay to make sure orders are executed by both trader and Oanda
    setTimeout(() => {
        traderIsExcutingTasks = false;
    }, 5000);
}