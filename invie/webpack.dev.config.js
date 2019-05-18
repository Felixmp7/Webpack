const path = require('path');

module.exports = {
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["@babel/preset-env",{ "targets": { "node": "current" } }], '@babel/react'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },
    ]
  }
}
