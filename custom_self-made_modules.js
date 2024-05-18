/*we can acquire the values using require
either by simply using require or by assigning it to a variable
here we will assign it to a variable*/
const name=require('./3.0_names')//importing object syntax...can also be done with destructuring {}..like {john, peter}...the var names can be different but the original object name has to be used for linkage purpose

const {sayHi}=require('./4_utils')//importing functions syntax if there are multiple functions in other module
//if there had been only one funtion in the imported module const sayHi=require('./4_utils') would have sufficed
//{ } destructures the module so that we can import required Function

const {sayHello}=require('./4_utils')
const {sayHlo}=require('./4_utils')
//Below one line code can also be used, order of function calling doesnt matter
//const {sayHi, sayHlo, sayHello}=require('./4_utils')


sayHi('susan')
sayHello(name.john)
sayHlo(name.peter)

const data=require('./3.1_onrun_exp')
const name2=data.singlePerson.name2
console.log(data)
console.log(data.items)
console.log(data.singlePerson)
console.log(data.singlePerson.name1)
console.log(name2)

/*the argument names in the destructuring assignment syntax don't have to match the property names exactly. 
You can rename them to different variable names.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

// Destructuring with renamed variables
const { firstName: fName, lastName: lName } = person;

console.log(fName); // Output: John
console.log(lName); // Output: Doe
But when destructuring an object, you specify the property names from the object that you want to extract data from. 
The property names are used to link to the corresponding values in the object.*/

