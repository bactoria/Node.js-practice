const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    res.write('<p>Hello, Users</p>')
})

app.get('/page/:id', (req, res) => {
    const name = req.params.id;
    res.send(`<h1>Hello ${name} Page</h1>`);
})

app.get('/', (req, res) => {
    res.send(`<h1>Hello, Node</h1>`);
})

app.listen(3000,()=> {
    console.log('Server is running')
})
