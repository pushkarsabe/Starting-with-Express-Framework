const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', 'root', {
     dialect: 'mysql',
     host: 'localhost'
});

module.exports = sequelize;

//to connect with mysql database
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//      host :'localhost',
//      user:'root',
//      password:'root',
//      database: 'nodejs'
// });

// module.exports = pool.promise();