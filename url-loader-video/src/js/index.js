import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import banner from '../images/banner1.jpg'
import platzi from '../videos/que-es-core.mp4'

const img = document.createElement('img')
img.setAttribute('src', banner)
img.setAttribute('width', 100)
img.setAttribute('height', 50)

const video = document.createElement('video')
video.setAttribute('src', platzi)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)

document.write(firstMessage)
document.body.append(img)
delayedMessage();
document.body.append(video)
