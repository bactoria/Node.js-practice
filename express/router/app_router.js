const express = require('express');

const app = express();

const routerPost = express.Router();
const routerUser = express.Router();

routerPost.get('/', (req,res) => {
    res.send('<h1>Post Page</h1>')
})

routerUser.get('/', (req,res) => {
    res.send('<h1>User Page</h1>')
})

app.use('/post', routerPost)
app.use('/user', routerUser)

app.listen(3000,()=> {
    console.log('Server is running')
})
