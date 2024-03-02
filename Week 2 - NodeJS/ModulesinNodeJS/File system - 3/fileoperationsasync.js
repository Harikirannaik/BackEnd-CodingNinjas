const { error } = require('console');
const fs = require('fs');



// write data
fs.writeFile('emp.txt',"{ \n new employee",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File is written')
    }
});


// update file
fs.appendFile('emp.txt','\n Another employee \n }',(er)=>{
    if(er){
        console.log(er)
    }else{
        console.log('file is updated')
    }
})

// read the data
fs.readFile('emp.txt',(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data.toString())
    }
});

// delete file
fs.unlink('emp.txt',(errors)=>{
    if(errors){
        console.log(errors)
    }else{
        console.log('data is deleted')
    }
})
console.log('this is another operation')