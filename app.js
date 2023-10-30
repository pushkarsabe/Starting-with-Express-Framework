const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//to parse the input
app.use(bodyParser.urlencoded({ extended: false }));

//middleware
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="enter title"><input type="text" name="size" placeholder="enter size"><button type="submit">Add Product</button></form>');//used to send any response back to client
})
//middleware
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

//middleware
app.use('/', (req, res, next) => {
    res.send('<h1>only / route</h1>');//used to send any response back to client
})

app.listen(3000);//creates server and listens to the response

//questions