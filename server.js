// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');  
var bodyParser = require('body-parser');

//Routes
var users = require('./routes/user');
var cards = require('./routes/card');
var auth = require('./routes/auth');
var cors = require('./cors');

//Database
var pg = require('pg');

//Application
var app  = express();  



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors()); //CROSS DOMAIN

//Don`t need auth
app.use('/users', users);

app.use(auth());
app.use('/cards', cards);


var port = process.env.PORT || 8080;        // set our port
var conString = "postgres://postif:postifix@localhost:5432/postifdb";


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);