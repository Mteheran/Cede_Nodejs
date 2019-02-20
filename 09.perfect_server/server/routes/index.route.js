const { Router } = require('express');
const { OK } = require('http-status-codes');

const router = Router();
router.get('/ping', (req, res) => {
    res.json({ status: 'Working', code: OK });
});

module.exports = router;
