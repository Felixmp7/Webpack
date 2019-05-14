const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'index.js'),
    precios: path.resolve(__dirname, 'precios.js'),
    contacto: path.resolve(__dirname, 'contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Aquí van los loaders
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
