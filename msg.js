const express = require('express');
const dataArray = require('../chat');
// const LocalStorage = require('node-localstorage').LocalStorage;
const fs = require('fs');

const router = express.Router();

//middleware = /home with get
router.get('/', (req, res, next) => {
    res.send(`<form action="/sendChat" onsubmit="document.getElementById('username').value = localStorage.getItem('username')" 
    method="POST">
    <input type="text" name="message" placeholder="enter chat">
    <input type="hidden" name="username" id="username">
    <br><br>
    <button type="submit">Send</button></form>`);

})
//middleware = /sendChat with post
router.post('/sendChat', (req, res, next) => {
    console.log(req.body);
    var msg = req.body.message;
    var name = req.body.username;
    console.log('msg = ' + msg);
    console.log('name = ' + name);

    var modified = ` ${name} : ${msg} `;
    console.log('modified = ' + modified);
    dataArray.push(modified);

    res.redirect('/');
})

module.exports = router;

// router.get('/', (req, res, next) => {
//     //to read the data from text file
//     fs.readFile('message.txt', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('data = ' + data);
//             //if chat is not in the file and empty
//             if (data === '') {
//                 res.send(`<h4>No Chat exixts</h4><form action="/sendChat" method="POST"><input type="text" name="textchat" placeholder="enter chat"><br><br><button type="submit">Send</button></form>`);
//             } else {
//                 //if file is not  empty
//                 res.send(`<h4>${data}</h4><form action="/sendChat" method="POST"><input type="text" name="textchat" placeholder="enter chat"><br><br><button type="submit">Send</button></form>`);
//             }
//         }
//     });

// })
// //middleware = /sendChat with post
// router.post('/sendChat', (req, res, next) => {
//     console.log(req.body);
//     var chat = req.body.textchat;
//     console.log('chat = ' + chat);
//     var appendedChat = localStorage.getItem('username') + ' : ' + chat + ' ';
//     console.log('appendedChat = ' + appendedChat);

//     //append the chat to existing file
//     fs.appendFile('message.txt', appendedChat, err => {
//         if (err) {
//             console.log(err);
//         } else
//             console.log('The text was appended to the file!');
//     });

//     res.redirect('/');
// })