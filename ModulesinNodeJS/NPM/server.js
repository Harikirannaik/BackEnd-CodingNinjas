// 1.import http library/module
const http = require('http');

// 2.create server
const server = http.createServer((req, res) => {
    // Here comes the request
    res.end('Welcome to NodeJS Ninja Server');
});

// 3.Specify port to listen request
server.listen(3000);

console.log('Server is in 3000');

