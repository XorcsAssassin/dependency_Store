const http=require('http')

const server=http.createServer((req,res)=>
{
  res.end('Hello World')                       /*callback to request(client side) when server is runnning*/
})

server.listen(5000,()=>{
  console.log('Server listeing on port: 5000')  /*callback to setting up server*/
})
/*While http.createServer method is essential for setting up the server(creates an instance of server).
It defines the server's request handling behavior but does not start listening for connections by itself. 
The server object created by http.createServer is essentially a configuration of how the server should respond to HTTP requests.

When server.listen is called, it begins the event loop that listens for requests and keeps the server process alive. 
This is the point where the server starts to actively accept connections and becomes a long-lived, persistent process.
It is server.listen method that makes the server persistent by starting it and keeping it running to handle incoming connections. 
Therefore, in the context of persistent APIs, server.listen is the method that ensures the server remains alive and operational.*/







