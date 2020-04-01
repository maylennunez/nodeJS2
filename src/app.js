const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');


// Importing routes
const indexRoutes = require('./routes/index');

// connecting to db

mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('db connected'))
.catch(err => console.log(err))

// Settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

// middlewares (execute a function before go to the toutes)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes

app.use('/', indexRoutes);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);

})