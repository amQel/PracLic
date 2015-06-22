var express = require('express');
var app = express();

<<<<<<< HEAD
=======
var $ = require('jquery');
windom.jQuery = $;

>>>>>>> 49dc037e8dffb3425a4b7cf4edc0fdbfa1a18787
//var errorHandler = require('errorhandler');

var routes = require('./routes');
var path = require('path');
var static = require('serve-static');

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

<<<<<<< HEAD
=======
app.use('/js/jquery.min.js', static(__dirname + '/bower_components/jquery/dist/jquery.min.js'));
app.use('/js/jquery.min.map', static(__dirname + '/bower_components/jquery/dist/jquery.min.map'));

app.get('/nauczyciel', routes.nauczyciel);



>>>>>>> 49dc037e8dffb3425a4b7cf4edc0fdbfa1a18787
app.listen(port, function () {
	console.log('Serwer oczekuje na połączenia na porcie ' + port);
});