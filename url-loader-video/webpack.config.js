const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Aquí van los loaders
      {
        // test: que tipo de archivo quiero reconocer
        test: /\.js$/,
        // use: que loader se va a encargar del archivo
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["@babel/preset-env", { "targets": { "node": "current" } }]]
          }
        }
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 150000
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 150000,
            // name: Indicamos en donde van a entrar los archivos que no estén dentro
            // del margen de limit
            name: 'videos/[name].[hash].[ext]'
          }
        }
      },
      {
        // test: que tipo de archivo quiero reconocer
        test: /\.css$/,
        // use: que loader se va a encargar del archivo
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          use: 'css-loader',
          // fallback: 'style-loader'
        }),
      }
    ]
  },
  plugins: [
    //Aqui van los plugins
    new ExtractTextPlugin("css/[name].css")
  ]
}
