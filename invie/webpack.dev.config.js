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

}
