const express=require('express')
const router=express.Router()

router.post('/',(req,res)=>{
  const {name}=req.body
  console.log(req.body)
  if(name){
    return res.status(200).send(`Welcome ${name}`)    //if name is not null the respond terminates here
  }
  res.status(401).send("<h3>Please Provide Credentials</h3>")   //if name is null then and then only the control flows to this syntax and this message is printed
})

module.exports=router