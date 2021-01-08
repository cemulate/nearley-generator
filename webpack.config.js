const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './NearleyGenerator.js',
  },
  output: {
    filename: 'nearley-generator.min.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        // loader: 'babel-loader'
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['babel-preset-env', {
                targets: {
                  browsers: ['last 2 Chrome versions']
                }
              }]
            ]
          }
        }
      }
    ]
  },
};
