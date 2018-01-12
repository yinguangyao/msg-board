const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const ejs = require('ejs')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// window下需要用trim，不然永远不会相等
const isDev = process.env.NODE_ENV.trim() === 'development';
const app = express();

// 将模板引擎设置为html，并指定读取模板文件的路径
app.set('views', path.join(__dirname, '../app/build'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// 开发环境下配置热替换，生产环境下直接读取对应html
if (isDev) {
  const webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    config = require('../webpack.dev.js'),
    compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(path.join(__dirname, '../app/build')));
}

app.listen(3000, () => {
  console.log("server is running on port 3000");
})

require('./routes/index')(app);
