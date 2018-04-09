var webpack = require("webpack");

module.exports = {
  devtool: "source-map",

  entry: {
    index: __dirname + "/src/index.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "/dist/"
  },

  devServer: {
    inline: true,
    contentBase: "./",
    port: '8088',
    historyApiFallback: true,

    proxy: {
      '/api/*': {
        target: 'https://www.v2ex.com',
        host: 'www.v2ex.com',
        changeOrigin: true
      }
    }
  },


  module: {
    loaders: [

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }

      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }

    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

};
