var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          sass: "vue-style-loader!css-loader!sass"
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue',
      'vuex': 'vuex/dist/vuex.js',
      '@': path.join(__dirname, '/src'),
      'Framework7':  path.join(__dirname, '/node_modules/framework7/dist/js/framework7.min.js'),
      'Framework7Vue': path.join(__dirname, '/node_modules/framework7-vue/dist/framework7-vue.min.js'),
      'gsap': path.join(__dirname, '/node_modules/gsap/src/minified/TweenMax.min.js'),
      'swiper': path.join(__dirname, '/node_modules/swiper/dist/js/swiper.esm.js')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false
    })
  ])
}
