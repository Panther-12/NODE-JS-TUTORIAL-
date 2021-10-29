// import the http module
// mainly used to setup a server together with express abstraction

const http = require('http');

// Initializes a server with response and client request as parameters
// checks if url is the root url and returns a message
// The message can be replaced by a webpage
const server = http.createServer ((req,res) => {
    if (req.url === '/'){
        res.end('welcome to ONETECH')
    }
    if(req.url === '/about'){
        res.end('The sites about page')
    }
    res.end(`<h1>OOPS PAGE NOT FOUND</h1>
    <a href="/">go back home</a>
    `)
});

// sets the port to 8000
server.listen(8000)

//NOTE: Remember equal operator is representent by three equal signs unlike 
//      two in python