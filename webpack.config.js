const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry:  ['babel-polyfill', './src/components/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/,use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'node_modules/foundation-sites/dist/css'),
        to: path.resolve(__dirname, 'public/css')
      },
      {
        from: path.resolve(__dirname, 'node_modules/foundation-sites/dist/js'),
        to: path.resolve(__dirname, 'public/js')
      },
      {
        from: path.resolve(__dirname, 'node_modules/what-input/dist'),
        to: path.resolve(__dirname, 'public/js')
      },
      {
        from: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
        to: path.resolve(__dirname, 'public/js')
      }
    ])
  ]
};

module.exports = config;
