const fs = require('fs')
const webpackAssets = './assets/webpack-assets.json'
const manifest = fs.existsSync(webpackAssets) ? require(webpackAssets) : {}

module.exports = manifest.packages ? manifest : {
  index: {
    js: 'application.js',
    css: 'application.css'
  },
  packages: {
    js: 'packages.js'
  }
}
