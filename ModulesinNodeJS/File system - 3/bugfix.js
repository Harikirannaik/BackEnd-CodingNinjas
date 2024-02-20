const fs = require('fs');

fs.writeFileSync('notes.txt', "old data");

fs.appendFile('notes.txt', " New data", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log("data appended");
    }
});

fs.readFile('notes.txt', "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});