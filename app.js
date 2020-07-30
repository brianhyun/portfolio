const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.render('index', {
        path: '/',
        pageTitle: 'Brian Hyun'
    });
});

app.get('/about', (req, res, next) => {
    res.render('about', {
        path: '/about',
        pageTitle: 'About'
    });
});

app.get('/contact', (req, res, next) => {
    res.render('contact', {
        path: '/contact',
        pageTitle: 'Contact'
    });
});

app.listen(3000, () => {
    console.log('Portfolio app listening on port', 3000);
});