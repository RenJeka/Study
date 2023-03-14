// simplest server
const http = require('http');

const myServer = new http.Server;

myServer.listen(8080, '127.0.0.1')

let counter = 0;
myServer.on('request', (request, response) => {
    console.log("request: ", request);
    console.log("response: ", response);
    response.end('Hello, my server! ' + ++counter);
});

