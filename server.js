const path = require('path');
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')

var app = new (express)()

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 1234;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler,
  { // noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }

 }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
