const app = require('express')();
const { STRING } = require('sequelize');
const sequelize = require('./service.sequelize');

const User = sequelize.define('user', {
    name: STRING,
    age: STRING
})

// app.get('/', (req, res) => {
//     res.json({status: 200, message: 'Working fine fine'});
// });

// app.post('/', (req, res) => {
//     User.create({name: 'Nick', age: 38})
//         .then((data) => {
//             res.json(res);
//         });
// });

app.listen(3000, () => {
    console.log('Server listen on localhost:3000');
});
