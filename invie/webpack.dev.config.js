const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // Desde donde arranca la app? => index.js
    invie: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    //A donde va a mandar mis archivos?
    path: path.resolve(__dirname, 'dist'),
    //Cómo se van a llamar nuestros archivos? => De forma dinámica
    filename: 'js/[name].js'
  },
  devServer:{
    port: 7000
  } ,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["@babel/preset-env",{ "targets": { "node": "current" } }], '@babel/react'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        ]
      }
    ]
  }
}
