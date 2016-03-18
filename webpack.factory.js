var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {

    return {
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            './client/index'
        ],
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'client/components')
            },
            extensions: ['', '.js', '.ts']
        },
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'app.js',
            publicPath: '/assets/'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        module: {
            loaders: [{
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            }]
        }
    }
};
