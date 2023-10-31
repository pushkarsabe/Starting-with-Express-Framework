const path = require('path');

const express = require('express');

const router = express.Router();
//will get a path to the directory
const rootDir = require('../util/path');

// contactus => GET
router.get('/success', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'successful.html'));
});

module.exports = router;
