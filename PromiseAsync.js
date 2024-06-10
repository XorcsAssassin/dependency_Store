const {readFile}=require('fs')

const getText= (path)=>       
  {
    return new Promise((resolve,reject)=>{
      readFile(path,'utf-8',(err, data)=>{
        if(err)
          reject(err)
        else
          resolve(data)
      })     
    })         
  }           

const start= async()=>
  {
    try
    {
      const first=await getText('./Folder/first.txt')
      const second=await getText('./Folder/second.txt')
      console.log(first)
      console.log(second)
    } 
    catch(err)
    {
      console.timeLog(err)
    }
  }
start()
console.log("Hello World")  //start function being async gets executed later after all sync code or all functions in call stack
