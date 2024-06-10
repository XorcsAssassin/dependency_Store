const express=require('express')
const app=express()

let {people}=require('./data')    //using let since we may modify the data

//static assets
app.use(express.static('./methods-public'))

app.get('/api/people',(req,res)=>{
  res.status(200).json({success:true, data:people})
})

//for Trad Form
//parse form data
app.use(express.urlencoded({extended:false}))   //creates a object in request body with clients input

app.post('/login',(req,res)=>{
  const {name}=req.body
  console.log(req.body)
  if(name){
    return res.status(200).send(`Welcome ${name}`)    //if name is not null the respond terminates here
  }
  res.status(401).send("<h3>Please Provide Credentials</h3>")   //if name is null then and then only the control flows to this syntax and this message is printed
})

//for Js Form
//parse json
app.use(express.json())

app.post('/api/people',(req,res)=>{
  const {name}=req.body
  if(!name){
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  res.status(201).json({success:true, person:name})
})

//for POSTMAN tuitorial
app.post('/api/postman/people',(req,res)=>{
  const {name}=req.body
  if(!name){
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  res.status(201).json({success:true, data:[...people,name]})
})

//specifically PUT method
app.put('/api/people/:id',(req,res)=>{
  const {id}=req.params
  const {name}=req.body
  const person=people.find((person)=>person.id==id) //short for const person = people.find(function(person) {return person.id == Number(id);}) ***const person=people.find((person)=>{person.id==Number(id)}) doesn't work***
  if(!person){
    return res.status(404).json({success: false, msg: `No person with ${id}`})
  }
  const newPeople=people.map((person)=>{
    if(person.id==id){
      person.name=name
    }
    return person
  })
  res.status(200).json({success: true, data: newPeople})
})

//specifically DELETE method
app.delete('/api/people/:id',(req,res)=>{
  const person=people.find((person)=>person.id==req.params.id) //short for const person = people.find(function(person) {return person.id == Number(id);}) ***const person=people.find((person)=>{person.id==Number(id)}) doesn't work***
  if(!person){
    return res.status(400).json({success: false, msg: `No person with ${req.params.id}`})
  }
  const newPeople=people.filter((person)=>{
    if(person.id!=req.params.id){
      return person
    }
  })
  return res.status(200).json({success: true, data: newPeople})
})

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})