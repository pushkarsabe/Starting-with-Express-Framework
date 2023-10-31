const path = require('path');

const express = require('express');

const router = express.Router();
//will get a path to the directory
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
