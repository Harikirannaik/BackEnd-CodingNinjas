
const fs = require('fs');

// read file content using blocking code

console.log("Starting to read")

const buffer = fs.readFileSync('data.txt',{encoding: 'utf8'});
console.log(buffer)

console.log('This is another operation for blocking')