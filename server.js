process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    config = require('./config/config'),
    app = require('./config/express').init(),
    httpServer;

if(process.env.NODE_ENV === 'production')
{
    var httpsServer = https.createServer({
        key: fs.readFileSync('./config/ssl/abcdapp.net.key'),
        cert: fs.readFileSync('./config/ssl/abcdapp.net.pem')},
        app
    );
    httpsServer.listen(443);

    http.createServer(function (req, res) {
        res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
        res.end();
    }).listen(config.port);
}
else
{
    // Development Environment
    httpServer = http.createServer(app);
    httpServer.on('listening', function() {
        var address = httpServer.address();
        console.log(process.env.NODE_ENV + ' server running on port ' + address.port);
    });
    httpServer.listen(config.port);

    // var webpack = require("webpack");
    // var WebpackDevServer = require("webpack-dev-server");
    // var WebpackConfig = require("./webpack.config.js");
    // WebpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
    // var compiler = webpack(WebpackConfig);
    // var server = new WebpackDevServer(compiler, {});
    // server.listen(8080);
}

module.exports = httpServer;