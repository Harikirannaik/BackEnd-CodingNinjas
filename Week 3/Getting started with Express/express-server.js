// Express server with get routef
const express = require('express')

// to create server
const server = express();

// handle for default request
server.get("/", (req, res) => {
    res.send("Welcome to express server");
})


// listen to specified port

server.listen(3100, () => {
    console.log('Server is in 3100');
})