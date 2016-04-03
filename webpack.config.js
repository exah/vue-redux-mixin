var webpack = require('webpack');
var fs = require('fs');

module.exports = {
  context: __dirname + '/src',
  entry: {
    index: './index.js',
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js',
    library: 'vue-redux-mixin',
    libraryTarget: 'umd',
  },
  externals: fs.readdirSync('node_modules'),
  resolveLoader: {
    modulesDirectories: [ 'node_modules' ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ],
  },
}
