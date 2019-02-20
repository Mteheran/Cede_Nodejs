const { Router } = require('express');
const { OK, CREATED, INTERNAL_SERVER_ERROR } = require('http-status-codes');

const User = require('../models/user.model');

const router = Router();

router.get('/', (req, res) => {
    User
        .findAll()
        .then((data) => {
            res.json(data);
        });
});

router.get('/:id', (req, res) => {
    User.find({ where: { id: Number.parseInt(req.params.id, 10) } })
        .then((data) => {
            res.json({ data, code: OK });
        });
});

router.post('/', (req, res) => {
    User
        .create(req.body)
        .then((data) => {
            res.json({ code: CREATED, user: data });
        }).catch((err) => {
            res.json({ status: INTERNAL_SERVER_ERROR, error: err.message });
        });
});

router.delete('/:id', (req, res) => {
    User.destroy({ where: { id: Number.parseInt(req.params.id, 10) } })
        .then((data) => {
            res.json({ data, code: OK });
        });
});

module.exports = router;
