const merge = require('webpack-merge'),
    common = require('./webpack.common.js'),
    path = require('path');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./app/build",
        compress: true
    }
})