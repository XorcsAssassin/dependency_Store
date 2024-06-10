//const app=require(express)()
const express=require('express')
const app=express()

//methods we are going to use most
//app.get...all browsers by default sends this http method if not specified otherwise
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

app.get('/',(req,res)=>{
  res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
  res.status(200).send('About Us')
})

//Doesn't explicitly handle unknown URLs, .all() method is a superset of all other methods and '*' is a wildcard match. So any unknown URL can be handled by .all('*')
//The placement of this syntax is imp, bcz ExpressJS checks all request methods and URLs in the order they are defined. So if a resource is present after this syntax, repective content will not be rendered and instead content under this syntax will be renderd
app.all('*',(req,res)=>{
  res.status(404).send('<h1>Resource not found.</h1>')
})

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})