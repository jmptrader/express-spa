/* eslint new-cap: [2, {"capIsNewExceptions": ["Server"]}] */

import express from 'express';
import morgan from 'morgan';
import {join} from 'path';
import webpack from 'webpack';

const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const factory = require('./webpack.factory');
const compiler = webpack(factory({
    env: process.env.NODE_ENV,
    typescript: true
}));

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '/assets/',
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
}));

app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

app.use(express.static(join(__dirname, 'public')));

app.get('*', function(req, res) {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

http.listen(port, (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(`${process.env.NODE_ENV} server running on port: ${port}`);
})
