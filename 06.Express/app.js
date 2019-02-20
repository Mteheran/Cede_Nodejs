const express = require('express');
const { join, resolve } = require('path');
const bodyParser = require('body-parser');

const { random, floor } = Math;

const app = express();

const {
    OK,
    NOT_FOUND,
    FORBIDDEN,
    INTERNAL_SERVER_ERROR,
} = require('http-status-codes');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger.service');
const notifier = require('./middleware/notifier.service');

app.use(bodyParser.json());
app.engine('handlebars', exphbs({
    defaultLayout: 'main.handlebars',
    layoutsDir: resolve(__dirname, 'views/layouts'),
}));
app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.get('/temp', (req, res) => {
    res.render('temp');
});

app.post('/dynamic/order', (req, res) => {
    const model = req.body;
    console.log(model);
    res.render('request', model);
});

app.get('/dynamic/:name', (req, res) => {
    const model = { 
        name: req.params.name,
        rate: floor(random() * 100),
        age: req.query.age,
    };
    res.render('dynamic', model);
});

app.use(logger);
app.use(notifier);
app.use('/static', express.static(join(__dirname, 'public')));
app.get('/ping', (req, res) => {
    res.statusCode = OK;
    res.json({ status: 'OK' });
});

app.use((req, res, next) => {
    next({ msg: 'Not Found', status: 'NOT_FOUND' });
});

app.use((err, req, res, next) => {
    res.statusCode = err.msg ? NOT_FOUND : INTERNAL_SERVER_ERROR;
    res.json({ status: err.status ? err.status : 'Internal error' });
});

module.exports = app;
