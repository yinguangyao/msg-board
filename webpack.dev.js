const merge = require('webpack-merge'),
    common = require('./webpack.common.js'),
    path = require('path'),
    webpackHotMiddleware = 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true';
// __webpack_public_path__ = "http://webpack:8080/";
const devConfig = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./app/build",
        compress: true,
        port: 3000,
        publicPath: '/'
    }
})
Object.keys(devConfig.entry).forEach((key, i) => {
    devConfig.entry[key].push(webpackHotMiddleware);
})
module.exports = devConfig