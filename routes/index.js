
var OANDA = require('../helpers/oanda');
var App = require('../helpers/app');

module.exports = function(app) {
    app.route('/').get(render);
    app.route('/*').get(render);
};

var render = function(req, res) {
  res.render('index', { OANDA: OANDA, App: App });
};

