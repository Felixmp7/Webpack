const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

// path me permite obtener rutas relativas
// path.resolve(__dirname, 'index.js') => Significa que va a buscar dentro del directorio en el que
// estoy, el archivo llamado 'index.js'
