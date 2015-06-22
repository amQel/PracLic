var express = require('express');
var app = express();

var $ = require('jquery');
//window.jQuery = $;

//var errorHandler = require('errorhandler');

var routes = require('./routes');
var path = require('path');
var static = require('serve-static');

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.use('/js/jquery.min.js', static(__dirname + '/bower_components/jquery/dist/jquery.min.js'));
app.use('/js/jquery.min.map', static(__dirname + '/bower_components/jquery/dist/jquery.min.map'));

app.get('/nauczyciel/:id', routes.nauczyciel);



app.listen(port, function () {
	console.log('Serwer oczekuje na połączenia na porcie ' + port);
});