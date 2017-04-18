var http = require("http");
var fs = require("fs");
var fs = require("fs");

http.createServer(function(request, response) {

    console.log("==================");
    console.log("processing response " + request.url);

    if (request.url == '/') {
        // Send the HTTP header
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, { 'Content-Type': 'text/plain' });

        // Send the response body as "Hello World"
        response.end('Hello World\n');
    } else if (request.url == '/secrets') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });

        console.log("reading my_secrets...");
        fs.readFile('my_secrets.json', function(err, data) {
            if (err) return console.error(err);

            console.log("got my_secrets!");
            response.end(data.toString());
        });
    } else if (request.url == '/blocking_secrets') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });

        console.log("reading my_secrets...");
        var data = fs.readFileSync('my_secrets.json');
        console.log("got my_secrets!");

        response.end(data.toString());
    }

    console.log("response ended");


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
