
const fs = require('fs');

fs.writeFileSync('notes.txt','The world has enough coders ')

const buffer = fs.readFileSync('notes.txt', { encoding: 'utf8' })

console.log(buffer);

fs.appendFileSync('notes.txt', 'BE A CODING NINJA');
const buffer2 = fs.readFileSync('notes.txt', { encoding: 'utf8' })

console.log(buffer2);