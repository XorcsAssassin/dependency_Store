setInterval(()=>{
  console.log("Hello World")
},2000)
console.log("I will run first")
//with setInterval the callback function proces stays alive unless killed using CTRL+c or some unexpexted error has occured
//these type of APIs are called Persistant/Long-Lived operations.