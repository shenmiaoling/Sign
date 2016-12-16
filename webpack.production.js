require('babel-register')

module.exports = require('./webpack.babel')({
  production: true
})
