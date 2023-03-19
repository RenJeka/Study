const http = require('http');

const port = 8080;

http.createServer((req, res) => {
    res.end('METHOD: ' + req.method + ' URL: ' + req.url);
}).listen(port, () => {
    console.log(`server is running on port ${port}`);
});
