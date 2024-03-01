const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//method for system uptime in seconds

console.log(`System Uptime is ${os.uptime() / 3600} hours`)


const currentOs = {
    name: os.type(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)
