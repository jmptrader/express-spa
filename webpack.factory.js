var webpack = require('webpack');
var path = require('path');

module.exports = function(options) {
    return {
        entry: entry(options),
        resolve: resolve(options),
        output: output(options),
        plugins: plugins(options),
        module: {
            loaders: loaders(options)
        }
    }
};

/*
 Entry Files for the Webpack configuation
 Additional Entry Files can be defined in the Files Array
 */
function entry(options) {
    var files = [
        './client/index'
    ];

    if (options.env === 'development') {
        files.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true');
    }

    return files;
}

/*
    Returns Webpack Resolve Object configuation
    TODO: Globbing directories in the clients folder to the alias object so
    webpack and resolve them automatically.
 */
function resolve(options) {
    var aliases = {};

    // aliases[folder] = path.join(__dirname, 'path', 'to', 'folder');

    return {
        alias: aliases,
        extensions: ['', '.js', '.ts']
    }
}

/*
    Returns Webpack's Output Object configuation
 */
function output(options) {
    return {
        path: path.join(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/assets/'
    }
}

/*
    Return Plugins based on Environment
    TODO: implement SASS compiling
    https://github.com/webpack/extract-text-webpack-plugin/blob/master/example/webpack.config.js
 */
function plugins(options) {
    var plugins = [];

    plugins.push(new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'));
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    plugins.push(new webpack.NoErrorsPlugin());

    if (options.env === 'development') {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    if (options.env === 'production') {
        plugins.push(new webpack.optimize.DedupePlugin());
    }

    return plugins;
}

/*
    Returns Loaders Objects
    Typescript is enabled by default
    Babel Preset are defined in the package.json file.
 */
function loaders(options) {
    var loaders = [];

    if (!options.typescript) {
        loaders.push({
            test: /\.js(x)?$/,
            loaders: ['babel'],
            exclude: /node_modules/,
        })
    } else {
        loaders.push({
            test: /\.ts(x)?$/,
            loaders: ['babel!ts'],
            exclude: /node_modules/
        });
    }

    return loaders;
}
