//Just for demonstation of POST method, how to send POST method req using html and how we can access client input data
//doesn't actually store data in database
const express=require('express')
const app=express()

let {people}=require('./data')    //using let since we may modify the data

//static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))   //creates a object in request body with clients input


app.post('/login',(req,res)=>{
  const {name}=req.body
  console.log(req.body
    
  )
  if(name){
    return res.status(200).send(`Welcome ${name}`)    //if name is not null the respond terminates here
  }
  res.status(401).send("<h3>Please Provide Credentials</h3>")   //if name is null then and then only the control flows to this syntax and this message is printed
})

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})