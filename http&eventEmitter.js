const http=require('http')

//Earlier
//const server=http.createServer((req,res)=>{
//res.end('Welcome')
//})

//using Event Emitter API as EventEmitter is used extensively in many modules in nodejs
const server=http.createServer()

//subcribe to it/listen for it/ respond to it
server.on('request', (req,res)=>{
  res.end('Welcome')
})

//emits 'request' event, when we type http://localhost:5000/
server.listen(5000,()=>{console.log('Server is listening to port 5000')})
