//this is with hepl of sequelize module and returns a class after importing
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }

});
module.exports = Product;

//this is with hepl of mysql2 module
// const fs = require('fs');
// const db = require('../util/database');
// const Cart = require('./cart');

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     //to protect aginst sql injetcion
//     return db.execute('INSERT INTO products (title,price,description,imageUrl) VALUES (?,?,?,?)', [this.title, this.price, this.description, this.imageUrl]);
//   }

//   static deleteById(id) {
//     return db.execute('DELETE FROM products WHERE products.id = ?', [id]);
//   }

//   static fetchAll() {
//     return db.execute('select * from products');
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
//   }
// };
