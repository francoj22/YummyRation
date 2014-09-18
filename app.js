/*jshint node:true */
/**
 * Module dependencies.
 */
var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// Defines the routes for the app
app.get('/', routes.home);
app.get('/seafood', routes.seafood);
app.get('/steak', routes.meat);
app.get('/pie', routes.dessert);
app.get('/salad', routes.vege);
app.get('/contact', routes.contact);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
