// module built in node
// - os module
// - http module

// import the os module
// GET the system info using the os module
const os = require('os')
const userInfo = os.userInfo()
console.log(userInfo)

/*
// check the system uptime after every five seconds
setInterval(() => {
    // get system uptime
    const sysUptime = os.uptime()
    console.log(`the system was up for ${sysUptime} seconds`)
}, 5000);

*/

// details on the current os
const currentOs = {
    name:os.hostname(),
    release:os.release(),
    type:os.type(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOs);