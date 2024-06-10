const express=require('express')
const app=express()
const logger=require('./logger.js')

//req=>middleware=>res
//since it's a static page and we need to record every login for all website routes, we can pass the function in app.use(), that way it will be invoked for all request from client
//also the order matters in ExpressJS...so if this syntax was placed after app.get('/')....app.use() wouldn't be invoked and hence we wouldn.t get any console log
app.use(logger) 

app.get('/',(req,res)=>{
  //Say dev wants a log of all request made to the URL...its impractical to add these syntaxes to each and every
  // const method=req.method
  // const url=req.url
  // const time=new Date().getFullYear()
  // console.log(method, url, time)
  return res.send('Home')
  })

app.get('/about',(req,res)=>{
  return res.send('About Us')
})

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})