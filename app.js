const express = require('express');
//importing all the routing logic from admin file
const adminRouter = require('./routes/admin');
//importing all the routing logic from shop file
const shopRouter = require('./routes/shop');

const app = express();

//to parse the input
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//this will take adminRouter as a function and will filter out routes starting with /admin
app.use('/admin',adminRouter);

//this will take adminRouter as a function and will filter out routes starting with /shop
app.use('/shop',shopRouter);

// routes with wrong url can be handled with status
app.use((req, res, next) => {
    res.status(404).send('<h1>404 page not found</h1>');
})

app.listen(3000);//creates server and listens to the response

//questions