const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('Welcome to this page');
        return;
    }
    if (req.url === '/about') {
        res.end('This is the about page');
        return;
    }
    res.end('<h1>Oops!</h1>' +
        '<a href="/">back Home</a>')

})

server.listen(5000);
