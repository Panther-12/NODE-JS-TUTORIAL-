const path = require('path')

// gets the separator used by the machine
const separator = path.sep
console.log(separator)

// get the filepath of a file
const filepath = path.join('folder','subfolder','text.txt')
console.log(filepath)

// get the base file
console.log(path.basename(filepath))

// return the absolute path of a certain resource
const abspath = path.resolve(__dirname,'folder','subfolder','text.txt')
console.log(abspath)