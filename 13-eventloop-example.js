// import readfile from file system
const { readFile } = require('fs');

const getPath = (path) =>{
    return new promises ((reject,resolve) =>{
        readFile('./folder/results.txt','utf8',(err,result)=>{
            if (err){
                return reject ;
            }
            else{
                return resolve(result);
            }
        })
    })

}

getPath('./folder/results.txt').then((result)=> console.log(result)).catch((err)=>console.log(err))

// Only when the promise is resolved then the result is displayed
const start = async () =>{
    try {
        const first = await getPath('./folder/results.txt');
    } catch (error) {
        console.log('error encountered:',error)
    }
}

start()