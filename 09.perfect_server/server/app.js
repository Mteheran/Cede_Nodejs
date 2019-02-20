const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const {
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
} = require('http-status-codes');

const index = require('./routes/index.route');
const user = require('./routes/user.route');

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use((req, res, next) => {
    
});

app.use('/', index);
app.use('/user', user);

app.use((req, res, next) => {
    next({ msg: 'Not Found', status: 'NOT_FOUND', code: NOT_FOUND });
});

app.use((err, req, res, next) => {
    res.statusCode = err.msg ? NOT_FOUND : INTERNAL_SERVER_ERROR;
    res.json({ status: err.status ? err.status : 'Internal error' });
});

module.exports = app;
