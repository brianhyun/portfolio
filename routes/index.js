const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        path: '/',
        pageTitle: 'Brian Hyun'
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.render('success', {
        path: '/',
        pageTitle: 'Success'
    })
});

module.exports = router;