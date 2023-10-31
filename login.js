const express = require('express');
const dataArray = require('../chat');
// const LocalStorage = require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./scratch');

//router functionality
const router = express.Router();

//middleware = /login with get
router.get('/login', (req, res, next) => {
    res.send(`<form action="/login" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" method="POST">
    <input type="text" name="username" id="username" placeholder="username">
    <button type="submit">Login</button>
    </form>`);//used to send any response back to client
})

//middleware = /login with post
router.post('/login', (req, res, next) => {
    console.log(req.body);
    var name = req.body.username;
    console.log('name = ' + name);
    // to redirect to home page for chatting
    res.redirect('/');
})

module.exports = router;