console.log(__dirname)
console.log(__filename)
console.log(process)
setInterval(    //this is a async function...i.e executed later...it requires two parameters, here a function and another how late to execute the function in milisecs
  ()=>{        //this is a function...in js functions can be passed as parameter...syntax as shown...therefore the function in paramter is also called callback function
  console.log('hlo world')
},1000)