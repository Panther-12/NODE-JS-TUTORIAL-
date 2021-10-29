// Events are activities that take place during the running of a program
// import the events module

const EventEmmiter = require('events');

// initialize a custom event 
const customEmmiter = new EventEmmiter()

// create functions to handle various events
customEmmiter.on('release',(name, age)=>{
    console.log(`my name is ${name} im ${age} years`)
})

// emit method produces output from the callback function 
// other methods include:
//      -addLIstener
customEmmiter.emit('release','nimrod',18)
