var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(options) {
  var entry, jsLoaders, plugins, cssLoaders;

  switch (options.env) {
    case 'dev':
      console.log("# Development");
      entry = [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        path.resolve(__dirname, 'js/app.js')
      ];
      cssLoaders = 'style-loader!css-loader!postcss-loader';
      plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.html',
          inject: true
        })
      ]
      break;
    case 'prod':
      console.log("# Production");
      entry = [
        path.resolve(__dirname, 'js/app.js')
      ];
      cssLoaders = ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader');
      plugins = [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new HtmlWebpackPlugin({
          template: 'index.html',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          },
          inject: true
        }),
        new ExtractTextPlugin("css/main.css"),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production")
          }
        })
      ];
      break;
  }

  return {
    entry: entry,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: "js/bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader' 
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: path.join(__dirname, '/node_modules/')
        }, {
          test:   /\.css$/,
          loader: cssLoaders
        }, {
          test: /\.jpe?g$|\.gif$|\.png$/i,
          loader: "url-loader?limit=10000"
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?v=[\d.]+)?(\?[a-z0-9#-]+)?$/,
          loader: 'url-loader?limit=100000&name=./css/[hash].[ext]'
        }
      ]
    },
    plugins: plugins,
    postcss: function() {
      return [
        require('postcss-import')({
          glob: true,
          onImport: function (files) {
              files.forEach(this.addDependency);
          }.bind(this)
        }),
        require('postcss-mixins')(),
        require('postcss-simple-vars')(),
        require('postcss-focus')(),
        require('postcss-nested')(),
        require('autoprefixer')({
          browsers: ['last 2 versions', 'IE > 8']
        }),
        require('postcss-reporter')({
          clearMessages: true
        })
      ];
    },
    target: "web",
    stats: false,
    progress: true
  }
}
