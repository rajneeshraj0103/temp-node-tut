const OS = require('os')

// info about current user
const user = OS.userInfo()
//console.log(user)

// methods returns the system uptime in seconds
//console.log(`The system Uptime is ${OS.uptime()} seconds`)

const currentOS = {
    name : OS.type(),
    release : OS.release(),
    totalMem : OS.totalmem(),
    freeMem : OS.freemem()
}
console.log(currentOS)
