const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');

// Importing routes

// Settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//middlewares (execute a function before go to the toutes)
app.use(morgan('dev'));


//routes



//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);

})