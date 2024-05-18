const mod=require('os')

//info about current user
const user=mod.userInfo()
console.log(user)

//method returns the sys. uptime 
console.log(`The System Uptime is ${mod.uptime()} seconds`)

//info about current OS
const currentOS=
{
  name: mod.type(),
  release: mod.release(),
  totalMem: mod.totalmem(),
  freeMem: mod.freemem()
}
console.log(currentOS)