var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('dist'));

app.get('*', function (req, res) {
  let target = req.path.substring(1) || 'home';
  res.send(target);
});

app.listen(3002, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at http://localhost:3002');
});
