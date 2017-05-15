var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars'), hbs;
var PORT = process.env.PORT || 3000;
var app = express();
var db = require('./db.js');
var bodyParser = require('body-parser');


app.set('port', 1337);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'static')));

hbs = handlebars.create({
	defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);

// send app to router
require('./router')(app);

/* express-handlebars - https://github.com/ericf/express-handlebars
A Handlebars view engine for Express. */

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '!');
	});
});