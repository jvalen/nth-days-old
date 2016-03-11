var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.prod.config');

console.log('Starting server from build folder...\n');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  filename: "bundle.js",
  contentBase: 'build',
  lazy: true,
  historyApiFallback: true,
  quiet: true
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started');
    console.log('Your app is available at http://' + '0.0.0.0' + ':3000 on any device in your local network!');
  }
});
