const mysql = require('mysql2');

const pool = mysql.createPool({
     host :'localhost',
     user:'root',
     password:'pushkar',
     database: 'nodejs'
});

module.exports = pool.promise();