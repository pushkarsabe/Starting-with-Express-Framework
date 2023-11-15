const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
// const User = require('./models/user');
// const Expense = require('./models/expense');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoute = require('./routes/user');
const expenseRoute = require('./routes/expense');
const { error } = require('console');

//parse application
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

//to manage users table with Booking appointment app if you don't comment this then you will get sequelize error for null id insertion
// app.use('/user', userRoute);

//to manage expense table with Expense tracker
app.use('/expense', expenseRoute);

app.use(errorController.get404);

// this will create products tabble
sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
