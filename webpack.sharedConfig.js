var path = require('path');

module.exports = {
  debug: true,
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /jquery\.js$/,
        loader: 'expose?jQuery',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel!envify!eslint',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
      {
        test: /\.(woff|otf|ttf|eot|svg|png|gif|ico)(.*)?$/,
        loader: 'file',
      },
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname))  + '/!html'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
  },
  devServer: {
    port: process.env.DECK_PORT || 9000,
    host: process.env.DECK_HOST || 'localhost'
  }
};
