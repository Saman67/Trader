var config = require('./config'),
    mysql = require("mysql"),
    pool  = mysql.createPool({
        host: config.mySQL.host,
        port: config.mySQL.port,
        user: config.mySQL.user,
        password: config.mySQL.password,
        database: config.mySQL.database
    });

module.exports.query = function(query, callback) {
    pool.getConnection(function(err, connection) {
        if(err) {
            config.logger.error(err);
            return callback(err);
        }

        connection.query(query, function(err, results) {
            connection.release();               // always put connection back in pool after last query
            callback(err, results);
        });
    });
};