const {readFile}=require('fs')

const getText= (path)=>       //since we dont assign a function name directly therefore we assign the function to a variable to call anonymous functions conviniently.
  {
    return new Promise((resolve,reject)=>
      {
        readFile(path,'utf-8',(err, data)=>
          {
            if(err)
            {
              reject(err)
            }
            else
            {
              resolve(data)
            }
          }   //end of callback func with parameter(err,data) inside readFile method
        )     //end of readFile Method
      }       //end of callback func with parameter(resolve, reject) inside Promise method
    )         //end of Promise method
  }           //end of function getText with paramater(path)
getText('./Folder/first.txt')
  .then((data)=>console.log(data)) 
  .catch((err)=>console.log(err))
console.log("Hello World")
/*The connection between resolve, reject, and the methods .then() and .catch() is an integral part of how Promises work in JavaScript.

Promise Mechanism
  Creating a Promise:
    When a promise is created, it starts in the "pending" state.
    The executor function you provide is executed immediately with two arguments: resolve and reject.

  Settling the Promise:
    resolve(value): Changes the state of the promise from "pending" to "fulfilled" and passes the value to the next .then() handler.
    reject(error): Changes the state of the promise from "pending" to "rejected" and passes the error to the next .catch() handler or the second parameter of .then() if provided.

  The .then() and .catch() Methods
    .then(onFulfilled, onRejected):
      onFulfilled is a callback function that is executed when the promise is fulfilled (i.e., when resolve is called). It receives the fulfillment value as its argument.
      onRejected is an optional callback function that is executed when the promise is rejected (i.e., when reject is called). It receives the rejection reason (error) as its argument.
    .catch(onRejected):
      This is a shorthand for .then(null, onRejected) and is used to handle errors (rejections). The onRejected callback is executed when the promise is rejected.

Flow and Connection
  Promise Execution:
    When getText is called, it returns a new promise.
    Inside the promise executor, readFile is called.

  Reading the File:
    If readFile encounters an error, it calls reject(err).
      The promise is now in the "rejected" state.
      The .catch((err) => console.log(err)) method is triggered, logging the error.
    If readFile successfully reads the file, it calls resolve(data).
      The promise is now in the "fulfilled" state.
      The .then((result) => console.log(result)) method is triggered, logging the file content.*/

/*The resolve and reject functions are not explicitly defined by you; instead, they are provided by the JavaScript engine as part of the Promise constructor.

When you create a new Promise, the Promise constructor takes a function as an argument (the executor function). 
This executor function is called immediately with two arguments: resolve and reject(one can name them anything but this the norm, provides clarity in regards to what the engine is passing to function). 
These arguments are functions that the JavaScript engine provides.
So basically the engine is passing implicitly defined functions as parameters inside another function(executor function).
It will be executed since in JS functions are "1st Class Citizens".*/

/*Well its still gonna be a pain if we have more functions or code to be executed inside executor function, say two more readFile and writeFile.
So to mitigate the problem we use async await function or API*/