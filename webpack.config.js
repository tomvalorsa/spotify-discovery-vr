require('dotenv').config({silent:true})
var webpack = require('webpack')
var copy = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  devtool: 'eval',
  module: {
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test'),
        ]
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(svg|eot|woff2?|ttf|png|jpe?g|json|csv)/,
        loader: 'file'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['src/components', 'src', 'node_modules']
  },
  plugins: [
    new copy([
      {from: 'src/index.html'},
      {from: 'node_modules/leaflet/dist/images', to: 'leaflet-images'}
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'CLIENT_ID': JSON.stringify(process.env.CLIENT_ID)
      }
    })
  ],
  postcss: [
    require('postcss-nested')
  ]
}
