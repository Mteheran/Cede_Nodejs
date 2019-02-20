const Sequelize = require('sequelize');

const sequelize = new Sequelize('mdb', 'root', 'my-secret-pw', {
    dialect: 'mysql',
    host: '127.0.0.1',
});

// sequelize.sync({ force: true });

module.exports = sequelize;
