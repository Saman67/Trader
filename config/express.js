var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');


module.exports.init = function() {
    
    var app = express();

    app.set('views', config.appDir + '/views');
    app.set('view engine', 'ejs');

    // this.sessionParser = session({
    //     secret: config.sessionSecret,
    //     resave: false,
    //     saveUninitialized: true
    // });
    // app.use(this.sessionParser);
    app.use(bodyParser.json({limit: '2mb', parameterLimit: 1000000}));
    app.use(bodyParser.urlencoded({limit: '2mb', extended: true, parameterLimit: 1000000}));
    app.use(cookieParser());
    app.use('/assets', express.static(config.appDir + '/public'));


    // Configure routes
    require('../routes/api')(app);
    require('../routes/index')(app);


    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        // var err = new Error('Not Found');
        // err.status = 404;
        // next(err);
        res.status(404).end();
    });
    
    // development error handler will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            config.logger.logError(err);
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }
    else {
        // production error handler, no stacktraces leaked to user
        app.use(function (err, req, res, next) {
            config.logger.logError(err);
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }

    return app;
};