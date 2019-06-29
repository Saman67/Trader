var webpack = require("webpack");
const path = require('path');
// var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // entry: [
    //     'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    //     'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    //     './modules/App.js' // app entry point
    // ],
    entry: {
        app: ['./modules/App.js'],
        vendor: [
            './public/javascripts/jquery.min.js',
            './public/javascripts/moment-with-locales.min.js',
            './public/charts/highstock.js'
        ]
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js",
        path: path.resolve(__dirname, 'public/javascripts/'),
        publicPath: '/assets/javascripts/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [/*'react-hot',*/ 'babel-loader?presets[]=es2015&presets[]=react&compact=false'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/\.\/locale$/) // to avoid warning for moment plugin
        // new webpack.HotModuleReplacementPlugin(),
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     cacheFolder: './public/javascripts/app',
        //     debug: true,
        //     minimize: true,
        //     sourceMap: false,
        //     output: {
        //         comments: false
        //     },
        //     compressor: {
        //         warnings: false
        //     }
        // })
    ],
    devServer: { inline: true }
};
