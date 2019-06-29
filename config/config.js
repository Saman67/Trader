var fs = require('fs');

var config = require('./env/' + process.env.NODE_ENV + '.js');

// if(config.logging.active) {
    var Log = require('log');
    var logStream = fs.createWriteStream(config.logging.file);
    config.logger = new Log('info', logStream);
// }

// config.logger = {
//     logError: function (err) {
//         //if (config.logging.active)
//         //    config.logger.logError(err);
//     }
//     info
// };

module.exports = config;