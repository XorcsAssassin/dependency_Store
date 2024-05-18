const sayHi=(name) =>
{
  console.log(`Hi there, ${name}`)
}

const sayHello=(name) =>
{
  console.log('Hello there, '+name)
}

const sayHlo=(name) =>
{
  console.log("Hlo there, "+name)
}

module.exports={ sayHi, sayHello, sayHlo}
//The below statements of exporting is wrong, unlike importing(require function), exporting cannont be done in this manner
/*module.exports={sayHi}
module.exports={sayHello}
module.exports={sayHlo}*/ 

/*In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. 
You can assign functions to variables, pass them as arguments to other functions, and return them from other functions.*/

//so sayHi variable is be assigned an arrow function with paramter name as value