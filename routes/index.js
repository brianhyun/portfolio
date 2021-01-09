const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        path: '/',
        pageTitle: 'Brian Hyun',
    });
});

module.exports = router;
