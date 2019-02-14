// node http_ex3

const http = require('http');

const router = {
    GET: {
        '/': (req, res) => {
            res.write('<p>Hello, Index</p>')
        },
        '/users': (req, res) => {
            res.write('<p>Hello, Users</p>')
        },
        '*' : (req, res) => {
            res.write('<p>Hello, *</p>')
        }
    },
    POST: {},
    DELETE: {},
    PUT: {}
}

const server = http.createServer((req, res) => {
    console.log('서버 실행');
    const matchedUrl = router[req.method][req.url];
    (matchedUrl || router[req.method]['*'])(req, res);
}).listen(8080);

server.on('listening', () => {
    console.log('8080포트에서 실행');
});

server.on('error', (err) => {
    console.error(err);
});
