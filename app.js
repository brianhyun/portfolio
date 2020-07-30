const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const errorController = require('./controllers/error');
const { port } = require('./config/config');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Route Handling
app.use(indexRouter);
app.use(aboutRouter);
app.use(contactRouter);

// 404 Page Handling
app.use(errorController);

app.listen(port || process.env.PORT, () => {
    console.log('Portfolio app listening on port', port);
});