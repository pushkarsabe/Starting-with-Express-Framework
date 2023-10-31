const path = require('path');

const express = require('express');

const router = express.Router();
//will get a path to the directory
const rootDir = require('../util/path');

// contactus => GET
router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

// contactus => POST
router.post('/contactus', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
});

module.exports = router;
