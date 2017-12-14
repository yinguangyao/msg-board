const merge = require('webpack-merge'),
    common = require('./webpack.common.js'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
    "plugins": [
        new UglifyJSPlugin({
            sourceMap: true,
            comments: false,
            compress: {
                warnings: false,
                drop_console: true
            }
        })
    ]
})