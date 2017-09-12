var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist.dev'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false, keep_fnames:true },
      mangle: { keep_fnames: true },
      test: /vendor\.js$/i
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js']
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
