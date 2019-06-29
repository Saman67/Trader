
var History = require('../helpers/history');
var Search = require('../helpers/search');
var Algorithm = require('../helpers/algorithms');
var indicators = require('../helpers/indicators');
var Trader = require('../helpers/trader');


module.exports = function(app) {

    // Currency Data
    app.route('/api/currency/history')
        .get(History.getInstrumentHistory);
    app.route('/api/currency/account')
        .get(History.getAccountInfo);

    // Currency Auto Trader
    app.route('/api/currency/trader/settings')
        .get(Trader.getSettings)
        .post(Trader.saveSettings);









    // Stock Data
    app.route('/api/stock/history')
        .get(History.getStockHistory);
    app.route('/api/stock/search')
        .get(Search.search);
    app.route('/api/stock/search/dataset')
        .get(Search.getDataset);
    app.route('/api/stock/search/metadata')
        .get(Search.getMetadata);

    // Analyzing any data
    app.route('/api/indicators/')
        .post(indicators.runIndicator);
};