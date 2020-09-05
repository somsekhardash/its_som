const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
var path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    stats: 'minimal',
    hot: true,
  },
});