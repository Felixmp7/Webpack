import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import banner from '../images/banner1.jpg'
import data from './teachers.json'
import renderToDom from './render-to-dom'

import React, { Component } from 'react'
import { render } from 'react-dom'

class Teachers extends Component{
  render(){
    return(
      <ul className="Teachers">

      </ul>
    )
  }
}

const Teacher = props => (
  <li className="Teacher">
    {props.name} <a href={`https://twitter.com/${props.twitter}`}>props.twitter</a>
  </li>
)

console.log(data);

data.teachers.forEach( teacher => {
  const element = document.createElement('li')
  element.textContent = teacher.name
  renderToDom(element)
})


document.write(firstMessage)
delayedMessage();

const img = document.createElement('img')
img.setAttribute('src', banner)
img.setAttribute('width', 100)
img.setAttribute('height', 50)
renderToDom(img)
// console.log('Hola mundo desde Webpack');
console.log('Hola mundo desde Webpack en webpack.config.js');
