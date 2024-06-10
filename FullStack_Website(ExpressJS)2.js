const express=require('express')
const path=require('path')

const app=express()

//setup static(file server doesn't have to change and used when and if required/called) and middleware
//uses(imports/gets) resources from outside(external directory if required)...it also setsup the MIME Types
//The express.static middleware has a default behavior where it serves 'index.html' implicitly if it's present in the specified directory when the directory itself is requested or if root URL e.g,'/' is requested
app.use(express.static('./public'))   //express.static is a built-in middleware

// app.get('/',(req,res)=>{
//   res.sendFile(path.resolve('public','index.html'))
// })

app.all('*',(req,res)=>{
  res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000,()=>{console.log('Server is listening on port 5000...')})