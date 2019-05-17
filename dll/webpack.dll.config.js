const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
 // module: {
 //    rules: [
 //      // Aquí van los loaders
 //      {
 //        // test: que tipo de archivo quiero reconocer
 //        test: /\.js$/,
 //        // use: que loader se va a encargar del archivo
 //        use: {
 //          loader: 'babel-loader',
 //          options: {
 //            presets: [["@babel/preset-env",{ "targets": { "node": "current" } }], '@babel/react']
 //          }
 //        }
 //      },
 //      {
 //        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
 //        use: {
 //          loader: 'url-loader',
 //          options: {
 //            limit: 150000
 //          }
 //        }
 //      },
 //      {
 //        test: /\.css$/,
 //        use: ExtractTextPlugin.extract({
 //          use: 'css-loader',
 //        }),
 //      },
 //      {
 //        test: /\.(sass|scss)$/,
 //        use: ExtractTextPlugin.extract({
 //          use: ['css-loader','sass-loader']
 //        }),
 //      }
 //    ]
 //  },
  plugins: [
    //Aqui van los plugins
    //new ExtractTextPlugin("css/[name].css")
    new webpack.DllPlugin({
      name:'[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     minChunks: 2,
  //     name: "vendor",
  //     chunks: "initial"
  //   }
  // }
}
