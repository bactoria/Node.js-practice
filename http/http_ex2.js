// node http_ex2

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('서버 실행');
    res.write('<h1>Hello, Node</h1>')

    if (req.method === 'GET') {
        if (req.url === '/') {
            res.write('<p>Hello, Index</p>')
        } else if (req.url === '/users') {
            res.write('<p>Hello, Users</p>')
        }
    } else if (req.method === 'POST') {

    } else if (req.method === 'PUT') {

    } else if (req.method === 'DELETE') {

    }

    res.end()
}).listen(8080);

server.on('listening', () => {
    console.log('8080포트에서 실행');
});

server.on('error', (err) => {
    console.error(err);
});
