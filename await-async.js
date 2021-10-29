// const util = require('util');
const {readFile, writeFile} = require('fs').promises;

// using the promisify method to create promises in a simpler method

// const readfilePromise = util.promisify(readFile);
// const writefilePromise = util.promisify(writeFile);

// initialise the asynchronous method 
// try the code and catch errors which are then displayed in the console
// await saves on time and executes immediate code before coming back to the completed long task
const start = async () =>{
    try{
        const first = await readfilePromise('./folder/results.txt','utf8');
        const second = await readfilePromise('./folder/one.txt','utf8')

        await writefilePromise('./folder/write-file.txt',`written data asynchronously using async and await`)
    }
    catch (error){
        console.log(error);
    }
}

start()