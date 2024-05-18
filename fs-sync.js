/*const fs=require('fs')   ...variable name can be same as object/module/method name, ESP6 allows this feature
fs.readFileSync*/

const {readFileSync, writeFileSync}=require('fs')//essentially the above to statements are equivalent to this statement with change in the variable name only

console.log('start')
const first=readFileSync('./Folder/first.txt','utf8')
const second=readFileSync('./Folder/second.txt','utf8')

console.log(first,second)

//To overwrite the existing text with one in arguenment in file on entered path dont pass the 3rd arg {flag:'a'}...to append pass 3rd arg {flag:'a'}, also if file not present, it will create one.
writeFileSync('./Folder/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'})
console.log('Done with this task')
console.log('Starting the next task')
/* in console log 
1st start is printed
2nd done with the task
3rd starting new task
notice the execution is line by line or synchronously.
This may become an issue when the files are big and will require time to read, write or execute any other time consuming function.
As a result the server will not be ready to accept task from another user untill it has completed reading, writing data from previous user.
Essentially ur server is dead cuz a server needs to be able to handle multiple users at once.*/