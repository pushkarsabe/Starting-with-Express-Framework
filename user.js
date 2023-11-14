const express = require('express');

const router = express.Router();

const addUserCotroller = require('../controllers/addUser');

// post /user/add-user
router.post('/add-user', addUserCotroller.postAddUsers);

// post /user/add-user
router.post('/get-users', addUserCotroller.getAllUsers);

// post /user/add-user
router.post('/delete-user/:id', addUserCotroller.deleteUser);

module.exports = router;
