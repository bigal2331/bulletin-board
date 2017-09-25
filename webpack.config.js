var path = require("path");
var webpack = require("webpack");

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    //entry point
    entry: path.join(__dirname,'index.js'),
    //the loaders that translate your code to ES5
    module: {
        loaders:
        [
            {   
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
        
    },
    //the name of the output file and the directory name where it should be saved
    output: {
        path: __dirname,
        filename: 'bundle.min.js'
    },
    //webpack plugins that optimize the bundle.min.js file
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
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

// as a last step you need to run the following command:
// NODE_ENV=production node_modules/.bin/webpack -p
//this creates a bundle.min.js file in the directory you
//specified in your output key