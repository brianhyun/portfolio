const express = require('express');
const mailgun = require('mailgun-js');

const router = express.Router();

router.get('/contact', (req, res, next) => {
    res.render('contact', {
        path: '/contact',
        pageTitle: 'Contact',
    });
});

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mg = mailgun({
        apiKey: process.env.API_KEY,
        domain: process.env.DOMAIN,
    });

    const data = {
        from: `${name} <${email}>`,
        to: 'hyunbrian97@gmail.com',
        subject: subject,
        text: message,
    };

    mg.messages().send(data, (err, body) => {
        if (err) {
            return res.status(503).json({ err });
        } else {
            return res.render('success', {
                path: '/',
                pageTitle: 'Success',
            });
        }
    });
});

module.exports = router;
