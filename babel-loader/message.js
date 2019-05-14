const waitTime = new Promise((ok,fail) => {
  setTimeout( () => {
    ok('han pasado 3 segundos')
  }, 3000)
})

module.exports = {
  firstMessage: 'Hola mundo desde un modulo',
  delayedMessage: async () => {
    const message = await waitTime
    console.log(message);
  }
}
