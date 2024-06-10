console.log('first')
setTimeout(()=>
{
  console.log('second')
},0)
console.log('third')
//with setTimeout after executing callback function once the process is killed and exited
//these type of APIs are called One-Short Timers