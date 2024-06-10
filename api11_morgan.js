const express=require('express')
const app=express()
const morgan=require('morgan')
// const logger=require('./logger.js')
// const authorize=require('./authorize.js')

//req=>middleware=>res
//since it's a static page and we need to record every login for all website routes, we can pass the function in app.use(), that way it will be invoked for all request from client
//also the order matters in ExpressJS...so if this syntax was placed after app.get('/')....app.use() wouldn't be invoked and hence we wouldn.t get any console log
// app.use([logger, authorize])
// app.use(express.static('./public')) //.use is a method that expects a middleware as argument that can be either our own(custom) or built-in(express) or 3rd party
app.use(morgan('tiny'))   //3rd party middleware...installed seperately

app.get('/',(req,res)=>{
  return res.status(200).send('Home')
  })

app.get('/about',(req,res)=>{
  return res.status(200).send('About Us')
})

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})