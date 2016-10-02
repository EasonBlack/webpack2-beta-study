const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: "./client.js",
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    {
                        loader: 'babel'
                    }
                ]
            },
        ],
    }
};