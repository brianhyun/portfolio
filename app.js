// Load Environmental Variables in Development Mode
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// NPM Packages
const express = require('express');
const bodyParser = require('body-parser');

// Routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const errorController = require('./controllers/error');

const app = express();

// View Engine
app.set('view engine', 'ejs');

// Parsing and Static Asset Serving Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Route Handling
app.use(indexRouter);
app.use(aboutRouter);
app.use(contactRouter);

// 404 Page Handling
app.use(errorController);

app.listen(process.env.PORT, () =>
    console.log(`Server listening on port ${process.env.PORT}...`)
);
