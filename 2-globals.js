// Common js - all files are modules
// module -Encapsulated block of code more like react components

// use require to import global modules
const names = require('./4-names');
const greetings = require('./5-funcs');
const data = require('./6-alternative-exports');

// imports all code provided code is executed inside a function which is  called in the file
require('./7-mindbomb')

// call the function and pass john variable
greetings(names.john);
