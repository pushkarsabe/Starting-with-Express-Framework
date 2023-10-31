const express = require('express');
//importing all the routing logic from admin file
const loginRouter = require('./routes/login');
//importing all the routing logic from shop file
const homeRouter = require('./routes/msg');

//to store the input data and username
const dataArray = [];

const app = express();

//to parse the input
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//this will take loginRouter as a function and will filter out routes starting with /admin
app.use(loginRouter);

//this will take homeRouter as a function and will filter out routes starting with /shop
app.use(homeRouter);

// routes with nothing will be told to lgoin 
app.use('/', (req, res, next) => {
    res.send('<h1>Please login first</h1>');
})

app.listen(3000);//creates server and listens to the response

module.exports = dataArray;
