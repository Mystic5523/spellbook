const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const helpers = require('./helpers');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',

  output: {
    // filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
});
