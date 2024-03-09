const express = require('express');

// create server
const server = express();


// handle default request
server.get("/", (req,res)=>{
    res.send("Welxome to express server");
});

// listen to request

server.listen(3100, ()=>{
    console.log('server is 3100');
});