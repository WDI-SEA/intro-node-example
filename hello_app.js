var http = require("http");
var fs = require("fs");
var fs = require("fs");

http.createServer(function(request, response) {

    console.log("==================");
    console.log("processing response " + request.url);

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('Hello World\n');

    console.log("response ended");


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
