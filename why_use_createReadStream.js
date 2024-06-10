var http=require('http')
var fs=require('fs')

http.createServer((req,res)=>{
  const fileStream=fs.createReadStream('./Folder/evenBigger.txt','utf-8')
  fileStream.on('open',()=>{
    fileStream.pipe(res)
  })
  fileStream.on('error',(err)=>{
    res.end(err)
  })
})
.listen(5000,()=>{console.log("Server is listening to port:5000...")})
