import webpack from 'webpack'
import config from './webpack.config'
import path from 'path'

export default {
  ...config,
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      },
      sourceMap: false
    })
  ],
  devtool: 'cheap-module-source-map'
}
