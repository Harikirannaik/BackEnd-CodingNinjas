const http = require("http");

const server = http.createServer((req, res) => {
  res.write("This is coming from nodeJS server ");
  console.log(req.url);
  if (req.url == "/first") {
    return res.end("This is first response");
  }
  res.end("This is default response");
});

server.listen(3000, (req, res) => {
  console.log("Server is running at port no 3000");
});
