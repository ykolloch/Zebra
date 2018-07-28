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
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'node_modules/materialize-css/dist/css'),
        to: path.resolve(__dirname, 'public/css')
      },
      {
        from: path.resolve(__dirname, 'node_modules/materialize-css/dist/js'),
        to: path.resolve(__dirname, 'public/js')
      }
    ])
  ]
};

module.exports = config;
