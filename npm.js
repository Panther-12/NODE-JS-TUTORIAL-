//local dependencies
// npm -i <package name>

// checking version of npm
// npm --version

//global dependencies
// npm install -g <package name>
// sudo npm install -g <package name> : linux and mac

// package.json file - manifest file which stores important info on the project(dependencies,commands etc)
// npm init -y - creates package.json file with default items
// npm init - creates the file in a step by step approach(QnA)

// nodemon package removes the burden of rewriting "node app.js" by tracking changes within your project
// It is installed as dev dependecy since we use it only during development 
// command : npm -i nodemon --save-dev/-D

// command: npm install - installs all packages listed in dependencies in package.json

// command: npm uinstall <package name> - unistalls a certain package

// package lock.json stores the specific versions of all the packages in the project