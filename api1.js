const express=require('express')
const app=express()

app.get('/',(req,res)=>{
  res.json([{name: 'John'},{name:'Susan'}])
})

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})