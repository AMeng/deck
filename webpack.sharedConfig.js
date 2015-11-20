var path = require('path');

module.exports = {
  nodeModulesPath: path.join(__dirname, 'node_modules'),
  bowerComponentsPath: path.join(__dirname, 'bower_modules'),
  sharedDefinitions: {
    "__NETFLIX_ENABLED__": true || process.env.NETFLIX_ENABLED,
    "__CLOUDFOUNDRY_ENABLED__": true || process.env.CLOUDFOUNDRY_ENABLED,
    "__GOOGLE_ENABLED__": true || process.env.GOOGLE_ENABLED,
    "__AMAZON_ENABLED__": true || process.env.AMAZON_ENABLED,
    "__TITAN_ENABLED__": true || process.env.TITAN_ENABLED,
  },
  sharedAliases: {
    'core': path.join(__dirname, 'src', 'core'),
  },
  //debug: true,
  //devtool: 'eval',
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
        loader: 'ng-annotate!angular!babel!envify!eslint',
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
