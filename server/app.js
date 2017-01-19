var express = require('express');

var webpack = require('webpack');
var webpackMiddleware = require("webpack-dev-middleware");
var WebpackHotMiddleware = require('webpack-hot-middleware')
var webpackDevConfig = require('../webpack.config.js');
var compiler = webpack(webpackDevConfig);

var app = express();

app.set('views', './client')
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(webpackMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));

app.use(WebpackHotMiddleware(compiler, {
  log: console.log,
}));

app.get('/', function(req, res) {
    res.render('index')
});

app.get('/info', function(req, res) {
    var { version, arch, platform } = process;
    res.send({
        version: version,
        arch: arch,
        platform: platform,
        dirname: __dirname
    });
});

app.listen('1024', () => {console.log('servering......')})
