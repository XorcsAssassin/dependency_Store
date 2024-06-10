const {readFile,writeFile}=require('fs').promises

const start= async()=>
  {
    try
    {
      const first=await readFile('./Folder/first.txt','utf-8')
      const second=await readFile('./Folder/second.txt','utf-8')
      await writeFile('./Folder/useOfPromisify.txt',`This showcases the use of Promisify method in Util module that simplifies promises: ${first} and ${second }`,{flag:'a'})
      console.log(first)
      console.log(second)
    } 
    catch(err)
    {
      console.timeLog(err)
    }
  }
start()
console.log("Hello World")
