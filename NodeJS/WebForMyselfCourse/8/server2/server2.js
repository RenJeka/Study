const http = require('http');
const url = require('url');
const fs = require('fs');

const server = new http.Server();

server.listen(8080, '127.0.0.1');

server.on('request', (request, response) => {
    const parsedURL = url.parse(request.url, true);
    fs.readFile(getPageNameByPath(parsedURL.pathname) + '.html', (error, data) => {
        if (error) throw new Error(error);
        response.end(data);
    })
});

function getPageNameByPath(path) {
    switch (path) {
        case '/':
        case '/index.html':
        case '/home': {
            return 'index';
        }
        case '/about': {
            return 'about';
        }
        default: {
            return 'error'
        }
    }
}
