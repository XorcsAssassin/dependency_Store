const express=require('express')
const app=express()
const logger=require('./logger.js')   //our own custom middleware

//req=>middleware=>res
// const logger=(req,res,next)=>{
//   const method=req.method
//   const url=req.url
//   const time=new Date().getFullYear()
//   console.log(method, url, time)
//   next()  //***IMP syntax, when using middleware, devs need to EITHER terminate the cycle by res.send or ress.json OR pass control to the next function using next() which is used more frequently
// } one can also setup this method(any method for that matter) in another file...in that case one doesnt need to add require(./logger) or whatever the file name is


app.get('/',logger,(req,res)=>{
  //Say dev wants a log of all request made to the URL...its impractical to add these syntaxes to each and every
  // const method=req.method
  // const url=req.url
  // const time=new Date().getFullYear()
  // console.log(method, url, time)
  return res.send('Home')
  })

app.get('/about',logger,(req,res)=>{
  return res.send('About Us')
})

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})