
var app = require('express')();
const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();

  console.log("I am working");

server.listen(port, hostname, () => {
  console.log(`Gwape says server running at http://${hostname}:${port}/`);
});
