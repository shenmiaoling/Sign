import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import AssetsPlugin from 'assets-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const resolveHashPath = (plainPath) => {
  return process.env.NODE_ENV == 'production' ? plainPath.replace(/\.(js|css)$/, `-[hash]${path.extname(plainPath)}`) : plainPath
}

const webpackConfig = {
  entry: {
    index: './main.js',
    packages: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    path: path.join(__dirname, './assets'),
    filename: resolveHashPath('application.js')
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(woff2|woff|eot|ttf)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(resolveHashPath('application.css')),
    new webpack.optimize.CommonsChunkPlugin('packages', resolveHashPath('packages.js')),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.styl', '.json']
  }
}

module.exports = (options = {}) => {
  return options.production ? Object.assign(webpackConfig, {
    plugins: webpackConfig.plugins.concat([
      new AssetsPlugin({
        path: path.join(__dirname, 'assets')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ])
  }) : webpackConfig
}
