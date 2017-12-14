const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const jade = require('jade');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const users = require('./routes/users');
const isDev = process.env.NODE_ENV.trim() == 'development';
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../app/build'));
app.set('view engine', 'html');
app.engine('html', jade.renderFile);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../app/build')));
if (isDev) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const config = require('../webpack.dev.js');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true
  }));
  app.use(webpackHotMiddleware(compiler));
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use("*", (req, res) => {
  res.render("index");
})
app.listen(3000, () => {
  console.log("server is running on port 3000");
})
module.exports = app;
