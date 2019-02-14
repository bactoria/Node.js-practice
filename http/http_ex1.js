// node http_ex1

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('서버 실행');
    res.write('<h1>Hello, Node</h1>')
    res.end()
}).listen(8080);

server.on('listening', () => {
    console.log('8080포트에서 실행');
});

server.on('error', (err) => {
    console.error(err);
});
