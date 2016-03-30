var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = function(options) {
    return {
        entry: entry(options),
        resolve: resolve(options),
        output: output(options),
        plugins: plugins(options),
        module: {
            loaders: loaders(options)
        },
        postcss: postcss(options),
        sassLoader: sassLoader(options)
    }
};

/*
 Entry Files for the Webpack configuation
 Additional Entry Files can be defined in the Files Array
 */
function entry(options) {
    var files = [
        './client/index',
        './client/app.scss'
    ];

    if (options.env === 'development') {
        files.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&reload=true');
    }

    return files;
}

/*
    Returns Webpack Resolve Object configuation
    TODO: Globbing directories in the clients folder to the alias object so
    webpack and resolve them automatically.
 */
function resolve(options) {
    var extensions = ['', '.js', '.jsx', '.css', '.scss']
    if (options.typescript) {
        extensions.push('.ts');
        extensions.push('.tsx');
    }

    var aliases = {};

    // aliases[folder] = path.join(__dirname, 'path', 'to', 'folder');

    return {
        alias: aliases,
        extensions: extensions
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

    plugins.push(new ExtractTextPlugin('styles.css'));
    plugins.push(new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'));
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.DefinePlugin({
        DEV: options.env === 'development'
    }));

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
            loader: 'babel',
            exclude: /node_modules/,
        })
    } else {
        loaders.push({
            test: /\.ts(x)?$/,
            loader: 'babel!ts',
            exclude: /node_modules/
        });
    }

    loaders.push({
        test: /\.(s)?css$/,
        loader: ExtractTextPlugin.extract('style', [
            'css',
            'postcss',
            'sass'
        ].join('!'))
    });

    return loaders;
}

/*
    PostCSS Loader
    Autoperfixes any CSS, project browser support must be defined.
    Also allows the use of CSSNext. http://cssnext.io/ with plain
    CSS files.
 */
function postcss(options) {
    return {
        defaults: [precss, autoprefixer],
        cleaner: [autoprefixer({
            browsers: []
        })]
    }
}

/*
    SASS Loader
    Defines the environement variable from the .env as a SASS variable
    that can be used. Looks in the sytling directory to resolve any
    import statements. 
 */
function sassLoader(options) {
    return {
        data: "$env: " + options.env + ";",
        includePaths: [
            path.resolve(__dirname, './styling')
        ]
    }
}
