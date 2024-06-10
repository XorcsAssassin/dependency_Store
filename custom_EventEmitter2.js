const EventEmitter=require('events') 

const customEmitter= new EventEmitter()

customEmitter.on('res',(name,age)=>{
  console.log(`Data received(${name} ${age})`)
})

customEmitter.on('res',(name,age)=>{
  console.log(`Name: ${name} \nAge: ${age}`)
})

customEmitter.emit('res','John Doe',17)
