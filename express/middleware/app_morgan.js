const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined')); // common, dev, short, tiny

app.use(morgan(':method'));
app.use(morgan(':date'));
app.use(morgan(':status')); // ... + 모던Node p.204

app.use('/', (req, res) => {
    res.send(`<h1>Hello, Node</h1>`)
})

app.listen(3000,()=> {
    console.log('Server is running')
})
