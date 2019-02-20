const Sequelize = require('sequelize');


const sequelize = new Sequelize({
	database: 'mydb',
	username: 'root',
	password: 'password',
    dialect: 'mysql',
    insecureAuth : true,
    port: 3306
});

sequelize
.sync({force: true})
.catch(data => console.log(data));

module.exports = sequelize;

