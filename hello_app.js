var http = require("http");
var fs = require("fs");

var counter = 0;

http.createServer(function(request, response) {

    console.log("==================");
    console.log("processing response " + request.url);

    if (request.url == "/") {
        counter++;
        // Send the HTTP header
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, { 'Content-Type': 'text/html' });

        // Send the response body as "Hello World"
        response.end(`<h1>BOO! x${counter}</h1>`);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>Sorry boo, that page don\'t exist</h1>');
    }

    console.log("response ended");
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
