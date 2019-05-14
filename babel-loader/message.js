import renderToDOM from './render-to-dom.js'
import makeMessage from './make-message'

const waitTime = new Promise((resolve,reject) => {
  setTimeout( () => {
    resolve('han pasado 3 segundos')}, 3000);
})

export const firstMessage = 'Hola mundo desde un modulo'
export const delayedMessage = async () => {
    const message = await waitTime;
    console.log(message);
    // const element = document.createElement('p');
    // element.textContent = message;

    renderToDOM(makeMessage(message));
  }
