const express = require('express');
const mailgun = require("mailgun-js");

// const { api_key, domain } = require('../config/config');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        path: '/',
        pageTitle: 'Brian Hyun'
    });
});

router.post('/', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mg = mailgun({ apiKey: api_key, domain: domain });
    const data = {
        from: `${name} <${email}>`,
        to: 'hyunbrian97@gmail.com',
        subject: subject,
        text: message
    };
    mg.messages().send(data, function(error, body) {
        console.log(body);
    });

    res.render('success', {
        path: '/',
        pageTitle: 'Success'
    })
});

module.exports = router;