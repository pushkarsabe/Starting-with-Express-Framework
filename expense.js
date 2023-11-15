const Sequelize = require('sequelize');

const sequalize = require('../util/database');

const Expense = sequalize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.STRING,
    },
    option: {
        type: Sequelize.STRING,
    }
});

module.exports = Expense;