
const fs = require('fs');

// read file content using blocking code

try {
    fs.writeFileSync('emp.txt', 'name: Hari, dept: Dev, Position: Intern')
} catch (e) {
    console.log(e)
}

//Append data into emp.txt
fs.appendFileSync('emp.txt', '\n' + 'name: Kiran, dept: Full Stack, Position: Intern')
fs.appendFileSync('emp.txt', '\n' + 'This need to be deleted')

// deleting a file
try {
    fs.unlinkSync('emp.txt')
} catch (e) {
    console.log('file doesnt exist')
}
console.log('This is a blocking code')

