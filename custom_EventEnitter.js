//general norm is to assign it to a variable names EventEmitter, which essentially is a class
//'events' is an asynchronous module
const EventEmitter=require('events') 

const customEmitter= new EventEmitter() //an instance of EventEmitter is created, which is basically a object

//register event listeners(handlers) for 'res' event using 'on' method
//it takes two arguments, the event name here 'res' which is a string, and a callback function that will be executed  when the event is emitted.
customEmitter.on('res',()=>{
  console.log(`Data received`)
})
//When customEmitter.on('res', ...) is called, it registers a listener for the 'res' event. 
//The provided callback function () => { console.log('Data received'); } will be executed whenever the 'res' event is emitted.


//trigger 'res' event using the 'emit' method
customEmitter.emit('res')
//The emit method is used to trigger an event. This method takes the event name ('res') as an argument and optionally any number of additional arguments that can be passed to the event listeners.
//When customEmitter.emit('res') is called, it triggers the 'res' event. The EventEmitter object then looks for any registered listeners for this event. 
//In this case, there is one listener registered for the 'res' event.

//The EventEmitter object finds the registered listener for the 'res' event and executes the callback function.
//In our case the callback function logs the message 'Data received' to the console.
//***The position of .emit matters....it should be after the .on of the respective event