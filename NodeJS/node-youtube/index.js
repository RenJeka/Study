const http = require('http');
const fs = require('fs');
const path = require('path');

// ===============================================================
// (function (exports, require, module, __dirname, __filename) {

    // const chalk = require('chalk')
    //
    // const text = require('./data')
    //
    // console.log(chalk.blue(text));
    //
    // console.log(__dirname);
    // console.log(__filename);


// })
// ===============================================================

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    console.log(request.url);

    // --------------Primitive way to response without any logic and navigation----------------------
    // response.end('<h1>Hello, this is response from server!</h1>');


    // -------------------Primitive way to response due link navigation----------------------
    // if (request.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //
    //         response.writeHead(200, {
    //             'Content-Type': 'text/html',
    //         });
    //
    //         response.end(data)
    //     });
    // } else if (request.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //
    //         response.writeHead(200, {
    //             'Content-Type': 'text/html',
    //         });
    //
    //         response.end(data)
    //     });
    // }

    // ------------------Easiest way to response due link navigation----------------------

    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
    const ext = path.extname(filePath);
    let contentType = 'text/html';

    switch (ext) {
        case '.css': {
            contentType = 'text/css'
            break;
        }

        case '.js:': {
            contentType = 'text/javascript';
            break;
        }

        default: {
            contentType = 'text/html';
        }
    }

    if (!ext) {
        filePath += '.html';
    }
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    response.writeHead(500);
                    response.end('Error 500');
                } else {
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.end(data)
                }
            });
        } else {
            response.writeHead(200, {
                'Content-Type': contentType
            });
            response.end(content)
        }

    });

})

const PORT = process.env.PORT  || 3000;

server.listen(PORT, () => {
    console.log(`Server has been started on port : ${PORT}`);
})
