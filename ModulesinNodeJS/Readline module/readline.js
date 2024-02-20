// import readline 
const readline = require('readline');

// configure interface to connect with terminal/commandline

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// reading values

interface.question("Enter first number ", (num1) => {
    interface.question("Enter second number ", (num2) => {
        const sum = Number(num1) + Number(num2);
        console.log(sum);
    })
});