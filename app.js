const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const User = require('./models/user');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoute = require('./routes/user');
const { error } = require('console');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//parse application
app.use('/admin', adminRoutes);
//parse application/json
app.use(shopRoutes);

app.post('/user',userRoute);

// will add new user details
// app.post('/user/add-user', async (req, res, next) => {
//   try {
//     if (!req.body.phoneNumber) {
//       throw new Error('Please add a phone number')
//     }
//     const name = req.body.name;
//     const email = req.body.email;
//     const phoneNumber = req.body.phoneNumber;
//     console.log('name = ' + name);
//     console.log('email = ' + email);
//     console.log('phone Number = ' + phoneNumber);

//     const data = await User.create({
//       name: name,
//       email: email,
//       phoneNumber: phoneNumber
//     })
//     //will send json response back to the client
//     res.status(201).json({ newUserDetails: data });
//   }
//   catch (err) {
//     res.status(500).json({
//       error: err,
//     })
//   }

// });

//will get all the data from database
// app.get('/user/get-users', async (req, res, mext) => {
//   try {
//     const userData = await User.findAll();
//     console.log('userData = ' + JSON.stringify(userData));
//     res.status(200).json({ UserData: userData });
//   }
//   catch (err) {
//     console.log('Get user is failing' + JSON.stringify(err));
//     res.status(500).json({ error: err });
//   }
// });

//will delete the user with specific id
// app.delete('/user/delete-user/:id', async (req, res, mext) => {
//   try {
//     if (req.params.id === undefined || req.params.id === "") {
//       res.status(400).json({ err: 'ID is missing' });
//     }
//     const userId = req.params.id;
//     console.log('userId = ' + userId);
//     await User.destroy({ where: { id: userId } });
//     res.sendStatus(200);
//   }
//   catch (err) {
//     console.log('Delete user is failing' + JSON.stringify(err));
//     res.status(500).json({ error: err });
//   }
// });

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
