import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import banner from '../images/banner1.jpg'
import data from './teachers.json'

console.log(data);

document.write(firstMessage)
delayedMessage();

const img = document.createElement('img')
img.setAttribute('src', banner)
img.setAttribute('width', 100)
img.setAttribute('height', 50)
document.body.append(img)
// console.log('Hola mundo desde Webpack');
console.log('Hola mundo desde Webpack en webpack.config.js');
