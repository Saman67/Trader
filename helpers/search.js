
var config  = require('../config/config');
var Quandl = require("quandl");
var quandl = new Quandl({
    auth_token: config.quandl.auth_token,
    api_version: config.quandl.api_version
});

exports.search = function (req, res) {

    if(!req.query.term)
        return res.end('Missing parameters!');

    var searchTerm = req.query.term;

    quandl.search(searchTerm, { format: "json" }, function(err, response){
        if(err)
            return console.log(err);

        res.json(JSON.parse(response));
    });

};


exports.getDataset = function (req, res) {

    if (!req.query.dataset || !req.query.database)
        return res.end('Missing parameters!');

    var dataset = req.query.dataset;
    var database = req.query.database;

    quandl.dataset({source: dataset, table: database}, function (err, response) {
        if (err)
            return console.log(err);

        res.json(JSON.parse(response));
    });
};

exports.getMetadata = function (req, res) {

    if(!req.query.dataset || !req.query.database)
        return res.end('Missing parameters!');

    var dataset = req.query.dataset;
    var database = req.query.database;

    quandl.metadata({source: dataset, table: database}, function(err, response){
        if(err)
            return console.log(err);

        res.json(JSON.parse(response));
    });
};