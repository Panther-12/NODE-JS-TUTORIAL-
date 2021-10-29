// read from a file asynchronus
// This means using callback functions to update data

// import readfile, writefile from fs
const {readFile,writeFile} = require('fs');

const read = readFile('./folder/one.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})

