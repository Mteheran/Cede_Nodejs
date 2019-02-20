const Sequelize = require('sequelize');
const sequelize = require('../services/db.access.service');

const User = sequelize.define('user', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.SMALLINT,
});

module.exports = User;
