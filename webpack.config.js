var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],
  resolve: {
    alias: {
      app: APP_DIR
    }
  }
};

module.exports = config;
