const express = require('express');

const router = express.Router();

router.get('/about', (req, res, next) => {
    res.render('about', {
        path: '/about',
        pageTitle: 'About'
    });
});

module.exports = router;