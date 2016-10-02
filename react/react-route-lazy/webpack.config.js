const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-eval-source-map',
    //entry: "./client.js",
    context: __dirname,
    entry: {
        js: [
           './client.js'
        ],
        vendor: [
            'react', 'react-dom'
        ]
    },
    output: {
        path: path.join(__dirname, './'),
        filename: 'main.js'
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
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modules: [
            path.resolve('./'),
            'node_modules'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        })
    ]
};