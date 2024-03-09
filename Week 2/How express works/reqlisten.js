const express = require ('express');

const server = express();

server.get("/",
// 1st middleware
(req,res,next)=>{
    ('This is from 1st middleware');
    next();
},
// 2nd middleware
(req,res)=>{
    res.send('Welcome to Express');
});

server.listen(3000,()=>{
    console.log("Server is running at port 3000")
});


