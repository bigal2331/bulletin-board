var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: path.join(__dirname,'index.js'),
    module: {
        loaders:
        [
            {   
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
        
    },
    output: {
        path: __dirname,
        filename: 'bundle.min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(
            {
              compress: { warnings: false },
              mangle: true,
              sourcemap: false,
              beautify: false,
              dead_code: true
            }
        )
    ]
    
};