//One of many ways to display data from files present in system or local server
var http=require('http')
var fs=require('fs')

http.createServer((req,res)=>{
  const text=fs.readFileSync('./Folder/evenBigger.txt','utf-8')
  res.end(text)
})
.listen(5000,()=>{console.log("Server is listening to port:5000...")})
//The disadvantage with this method is that loading big files requires more time than ReadStream
//As this method sends data as a whole package/content but ReadStream does so by chunks