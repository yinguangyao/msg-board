const path = require('path'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    "entry": {
        index: ["./app/src/App.jsx"],
        "vendor": [
            "react",
            "redux",
            "react-redux",
            "react-dom"
        ]
    },
    "resolve": {
        "extensions": ['.js', '.jsx']
    },
    "output": {
        "path": path.resolve(__dirname, "app/build"),
        "filename": "js/[name].js",
        "publicPath": 'http://localhost:3000/'
    },
    "module": {
        "loaders": [{
            "test": /\.(js|jsx)$/,
            "exclude": /node_modules/,
            "loader": "babel-loader"
        }, {
            "test": /\.(sass|scss)$/,
            "use": ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            }),
        }]
    },
    "plugins": [
        new ExtractTextPlugin({
            filename: 'css/index.css',
            disable: false,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "留言板",
            template: "index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "js/bundle.js" })
    ]
}
module.exports = config