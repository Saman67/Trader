
var OANDAAdapter = require('oanda-adapter');
var etrade = require('etrade');
var config  = require('../config/config');
var OANDA = require('../helpers/oanda');
var Quandl = require("quandl");
var quandlData = require("./quadl");
var moment = require("moment");

var OandaClient = new OANDAAdapter({
    environment: config.oanda.environment,
    accessToken: config.oanda.accessToken
});

exports.getInstrumentHistory = function(req, res) {

    if(!req.query.start || !req.query.end)
        return res.end('Missing parameters!');

    if(!req.query.instrument || !OANDA.instruments[req.query.instrument])
        req.query.instrument = "CAD_USD";

    if(!req.query.scale || !OANDA.scales[req.query.scale])
        req.query.scale = "D";

    var start = new Date(req.query.start),
        end = new Date(req.query.end),
        scale = req.query.scale,
        instrument = req.query.instrument;

    OandaClient.getCandles(instrument, start, end, scale, function(error, candles) {
        if(error) {
            res.end(error);
            return console.log(error);
        }

        var data = {
            series: []
        };

        for(var i =0; i<candles.length; i++)
            data.series.push([
                candles[i].time/1000,
                parseFloat(candles[i].openBid.toFixed(4)),
                parseFloat(candles[i].highBid.toFixed(4)),
                parseFloat(candles[i].lowBid.toFixed(4)),
                parseFloat(candles[i].closeBid.toFixed(4))
            ]);

        data.tickInterval = OANDA.scales[scale];
        data.instrument = OANDA.instruments[instrument].instrument;

        res.json(data);
    });

    // OandaClient.subscribePrice(config.oanda.accountId, instrument, function (tick) {
    //
    //     var tt = tick;
    //     // ask
    //     // bid
    //     // instrument
    //     // time
    // }, this);
};

exports.getAccountInfo = function(req, res) {

    OandaClient.getAccount(config.oanda.accountId, function (err, account) {
       if(err)
           return console.log(err);

        OandaClient.getOpenTrades(config.oanda.accountId, function (err, trades) {
            OandaClient.getOpenPositions(config.oanda.accountId, function (err, positions) {
                res.json({
                    account: account,
                    positions: positions,
                    trades: trades
                });

                // positions
                // avgPrice = 129.822
                // instrument = "EUR_JPY"
                // side = "sell"
                // units = 1000
            });
        });

        // account
        //     accountCurrency = "USD"
        //     accountId = 4771638
        //     accountName = "Primary"
        //     balance = 76211.3587
        //     marginAvail = 76211.3587
        //     marginRate = 0.05
        //     marginUsed = 0
        //     openOrders = 0
        //     openTrades = 0
        //     realizedPl = -23668.5161
        //     unrealizedPl = 0
    });
};










var quandl = new Quandl({
    auth_token: config.quandl.auth_token,
    api_version: config.quandl.api_version
});

exports.getStockHistory = function (req, res) {

    if(!req.query.start || !req.query.end || !quandlData.WIKI[req.query.equity])
        return res.end('Missing parameters!');

    // var start = moment(req.query.start, "MM-DD-YYYY").format('YYYY-MM-DD'),
    //     end =  moment(req.query.end, "MM-DD-YYYY").format('YYYY-MM-DD'),
    //     equity = req.query.equity;

    var start = new Date(req.query.start),
        end = new Date(req.query.end),
        equity = req.query.equity;

    quandl.dataset({
        source: 'WIKI',
        table: equity
    }, {
        order: "asc",
        // exclude_column_names: true,
        // Notice the YYYY-MM-DD format
        start_date: start,
        end_date: end,
        //column_index: 4
    },
    function(err, response) {
        if (err)
            console.log(err);

        var json = JSON.parse(response);

        var data = { normal: [], adjusted: [] };
        for (var i = 0; i < json.dataset.data.length; i++) {
             var point = json.dataset.data[i];
            // data.normal.push({
            //     x: (new Date(point[0])).getTime(),  // 0 = "Date"
            //     o: point[1],  // 1 = "Open"
            //     h: point[2],  // 2 = "High"
            //     l: point[3],  // 3 = "Low"
            //     y: point[4],  // 4 = "Close"
            //     v: point[5],  // 5 = "Volume"
            // });
            data.adjusted.push({
                x: (new Date(point[0])).getTime(),  // 0 = "Date"
                // y: point[0],  // 6 = "Ex-Dividend"
                // r: point[0],  // 7 = "Split Ratio"
                o: point[8],  // 8 = "Adj. Open"
                h: point[9],  // 9 = "Adj. High"
                l: point[10],  // 10 = "Adj. Low"
                y: point[11],  // 11 = "Adj. Close"
                v: point[12]   // 12 = "Adj. Volume"
            });
        }

        // parseFloat(candles[i].closeBid.toFixed(4))

        res.json({data: data.adjusted, equity: json.dataset.dataset_code});
    });

};



var EtradeClient = new etrade({
    useSandbox : true, // true if not provided
    key : config.eTrade.consumer_key,
    secret : config.eTrade.consumer_secret
});

exports.getAuthUrl = function (req, res) {

    EtradeClient.getRequestToken(
        function(authorizationUrl) {
            // Your service requires users, who will need to visit
            // the following URL and, after logging in and
            // authorizing your service to access their account
            // data, paste the E*TRADE provided verification
            // code back into your application.
            console.log("Please have your client visit " + authorizationUrl + " to authorize your service");

            res.writeHead(302, {'Location': authorizationUrl});
            res.end();
        },
        function(error) {
            console.log("Error encountered while attempting " +
                "to retrieve a request token: " +
                error); }
    );
};



// et.getAccessToken(config.eTrade.authCode,
//     function() {
//         // Your app can start using other E*TRADE API now
//     },
//     function(error) {
//         console.log("Error encountered while attempting " +
//             "to exchange request token for access token: " +
//             error);
//     }
// );