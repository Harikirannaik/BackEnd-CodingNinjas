// create server
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.body)
  if (req.method == "POST") {
    // expecting data from client
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
      req.on("end", () => {
          console.log(body);
          res.end("data is recieved");
      })
  } else {
    console.log("Function ends here");
    res.end("welcome to nodeJS");
    }
    
});

server.listen(3100);

console.log("server is at 3100");
