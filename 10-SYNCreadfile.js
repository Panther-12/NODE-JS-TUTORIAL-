// from file system import readfileSync, writefileSync
const {readFileSync,writeFileSync} = require('fs');

// read from a file in the system
const read = readFileSync('./folder/one.txt','utf8');
console.log(read)


// write to a file if the file is not present node creates one and adds the text passed on
const write = writeFileSync('./folder/results.txt', `${read} inductive argumets are arguments whereby if the truth of the first proposition is accepted the truth of the conclusion is only accepted based on probability `)

// flag argument is used to set the action to be performed
const append = writeFileSync('./folder/result.txt','appended value',{flag:'a'})