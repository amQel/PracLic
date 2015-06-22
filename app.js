var express = require('express');
var app = express();


//var errorHandler = require('errorhandler');

var routes = require('./routes');


var port = process.env.PORT || 3000;


app.use(express.static(__dirname + 'public'));


app.listen(port, function () {
	console.log('Serwer oczekuje na połączenia na porcie ' + port);
});