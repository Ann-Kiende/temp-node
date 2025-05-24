const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
  console.log(`Smart girl ${name} with id: ${age}`)
})

customEmitter.on('response', () => {
  console.log('Has high standards now ')
})

customEmitter.emit('response', 'Kitanna', 29)
