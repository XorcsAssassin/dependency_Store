const {readFile , writeFile}=require('fs')

console.log('start')
readFile('./Folder/first.txt','utf-8',
  (err, result)=>
  {
    if(err)
    {
      console.log(err)
      return
    }
    const first=result
    readFile('./Folder/second.txt','utf-8',
      (err,result)=>
      {
        if(err)
        {
          console.log(err)
          return
        }
        const second=result
        writeFile('./Folder/result-async.txt',`Here is the result: ${first} and ${second}`,{flag: 'a'},
          (err,result)=>
          {
            if(err)
            {
              console.log(err)
              return
            }
            console.log('done with this task')
          }
        )
      }
    )
  }
)
console.log('starting next task')
/*in conosle log 
1st start will be printed
2nd starting next task
3rd done with the task

This is due to async....i.e code is not executed line by line.
Functions(specifically callback funtions) given as arguments in a async function are queued in a special seperate queue. 
When the remaining code(syntax/task) inside and outside the async function is done executing(in LIFO fashion since they are seperately stored in function execution stack),
then and then only the callback functions are executed in FIFO fashion since they are stored in a queue ds.
This is essential in today's world as it helps overcoming the disadvantage of time-consuming sync functions which is the main characteristic of single-threaded JS.
It does so by allowing server to accept info/data from other users even when the engine has not completed the previous task.*/
