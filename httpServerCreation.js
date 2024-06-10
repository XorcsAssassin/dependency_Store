const http=require('http')

//everytime a user(client) hits up the url, we have access to these two parameters, req tells us info about incoming request 
//beacause we want to know if client just wants some resource or wants to add data to server,
//we want the method to be known to us and res is what we have control over, the response should be appropiate to incoming request, 
//we also need to be extremely specific to communicate to browser about the data we are sending back
const server=http.createServer((req,res)=>{
  //console.log(req)
  //console.log(req.method)
  //console.log(req.url)
  const url=req.url
  //Home Page
  if(url==='/'){
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<h1>Home Page</h1>')
    res.end()
  }
  //About Page
  else if(url==='/about'){
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<h1>About Us</h1>')
    res.end()
  }
  //404
  else{
    res.writeHead(404,{'content-type': 'text/html'})
    res.write('<h1>Page not found</h1>')
    res.end()
  }
})

server.listen(5000,()=>{console.log('Server is listening to port 5000...')})