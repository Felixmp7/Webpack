import './estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import banner from './banner1.jpg'

const img = document.createElement('img')
img.setAttribute('src', banner)
img.setAttribute('width', 100)
img.setAttribute('height', 50)

// console.log('Hola mundo desde Webpack');
console.log('Hola mundo desde Webpack en webpack.config.js');
document.write(firstMessage)
document.body.append(img)
delayedMessage();
