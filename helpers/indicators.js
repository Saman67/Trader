
var regression = require("regression");
var indicators = require("./indicators");


exports.runIndicator = function(req, res) {
    if(!req.body || !req.body.data || req.body.data.length < 2)
        return res.end('Incorrect body parameter! Must be an array larger than dept.');
    if(!req.query.indicator || !indicators.methods[req.query.indicator])
        return res.end('Incorrect indicator parameter!');
    if(!req.query.dept || req.query.dept < 2 || req.query.dept > req.body.data.length)
        return res.end('Incorrect dept parameter!');

    var indicator = indicators.methods[req.query.indicator];

    for(var i=0; i<req.body.data.length; i++)
        req.body.data[i] = [parseInt(req.body.data[i][0]), parseFloat(req.body.data[i][1])];

    var dept = parseInt(req.query.dept);

    var points = indicator.func(req.body.data, dept);

    res.json({name: indicator.name, description: indicator.description, points});
};

exports.indicators = {
    linear_aggression: {
        id: "linear_aggression",
        name: "Linear Aggression",
        description: "Finds slope for each set of points and draws the slope line.",
        func: function (hist, dept) {
            if(!dept || dept < 2)
                dept = 5;

            var slopes = [];
            for (var i = 0; i < hist.length; i += dept) {
                var tt = indicators.getLinearRegressionPoints(hist, i, dept);
                slopes.push(tt[0]);
            }
            return slopes;
        }
    },
    accumulation_day: {
        id: "accumulation_day",
        name: "Accumulation Day",
        description: "",
        func: function (hist, dept) {
            if(!dept || dept < 2)
                dept = 5;

            var slopes = [];
            for (var i=0; i < hist.length; i+=dept) {
                var tt = indicators.getLinearRegressionPoints(hist, i, dept);
                slopes.push({x:0,y:0});
            }
            return slopes;
        }
    },
    distribution_day: {
        id: "distribution_day",
        name: "Distribution Day",
        description: "",
        func: function (hist, dept) {
            if(!dept || dept < 2)
                dept = 5;

            var slopes = [];
            for (var i = 0; i < hist.length; i += dept) {
                var tt = indicators.getLinearRegressionPoints(hist, i, dept);
                slopes.push(tt[0]);
            }
            return slopes;
        }
    }
};

exports.getLinearRegressionPoints = function (array, start, length) {
    var data = array.slice(start, start + length);
    var slope = regression.linear(data);
    var m = slope.equation[0], b = slope.equation[1];
    var xs = [], ys = [];
    for (var i = 0; i < data.length; i++) {
        xs.push(data[i][0]);
        ys.push(data[i][1]);
    }
    var x0 = Math.min.apply(null, xs),
        y0 = m*x0 + b;
    var xf = Math.max.apply(null, xs),
        yf = m*xf + b;
    return [[x0, y0], [xf, yf]];
};