const http=require('http')

const server=http.createServer((req,res)=>{
  if(req.url=='/')
  {
    res.end('Home Page')
  }
  else if(req.url=='/about')
  {
    //blocking code
    for(let i=0;i<1000;i++)
      for(let j=0;j<1000;j++)
        console.log(`${i} ${j}`)
    res.end('About Us')
  }
  else                  //required else syntax for porper working of whole code
  res.end('Error 404')
})

server.listen(5000,()=>{
  console.log('Server is listening on port 5000...')
})