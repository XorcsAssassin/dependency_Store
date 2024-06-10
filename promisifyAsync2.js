const {readFile,writeFile}=require('fs')

const util=require('util')

const readFilePromised=util.promisify(readFile)
const writeFilePromised=util.promisify(writeFile)

const start= async()=>
  {
    try
    {
      const first=await readFilePromised('./Folder/first.txt','utf-8')
      const second=await readFilePromised('./Folder/second.txt','utf-8')
      await writeFilePromised('./Folder/useOfPromisify.txt',`This showcases the use of Promisify method in Util module that simplifies promises: ${first} and ${second }`)
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
