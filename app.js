console.log('production server');

import webpack from 'webpack';

// TODO: Test this.
const factory = require('./webpack.factory');
const compiler = webpack(factory({
    env: process.env.NODE_ENV,
    typescript: true
}));

compiler.run();
