// javascript is synchronous and single threaded
// Meaning: javascript reads code line by line

// settimeout API Is used to offload the burden to the browser
// it allows for no delay time unlike a for loop but is still synchronous


// when the code runs the result are first,third,second 
// reason: setTimeout is synchronous therefore will be offloaded to the browser and only after
//          execution will the callback be executed "console.log('second')"
console.log('first');
setTimeout(()=>{
console.log('second')
},0)

console.log('third')
// with setTimeout the processes is completed and exited
// with setInterval the process keeps on running after the specified time
//     - only exit is CONTROL-C
//     - unexpected error