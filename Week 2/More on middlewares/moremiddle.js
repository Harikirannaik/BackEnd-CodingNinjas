const express = require ('express');

const server = express();


// 1st middleware
function firstMiddleware(req,res,next){
    console.log("this is 1st middleware");
    next();
}

function secondMiddleware(req, res, next){
    console.log("2nd middleware");
    next();
}

// Global middleware
function globalMiddleware(req,res,next){
    console.log("this is global middleware");
    next();
}

server.use(globalMiddleware); 
server.get("/send",[firstMiddleware,secondMiddleware],(req,res)=>{
    res.send('Welcome to Express');
});

server.listen(3000,()=>{
    console.log("Server is running at port 3000")
});

