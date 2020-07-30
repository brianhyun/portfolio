const express = require('express');

const router = express.Router();

router.get('/contact', (req, res, next) => {
    res.render('contact', {
        path: '/contact',
        pageTitle: 'Contact'
    });
});

module.exports = router;