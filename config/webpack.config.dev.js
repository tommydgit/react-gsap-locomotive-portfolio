const path = require('path')
const config = require('./webpack.config.js')

config.devServer = {
  // host: '192.168.1.132',
  host: '0.0.0.0',
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../build'),
  port: 8080,
  disableHostCheck: true
}

config.devtool = 'inline-source-map'

module.exports = config
