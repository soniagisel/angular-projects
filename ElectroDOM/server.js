var express = require('express');
var app = express();
var fs = require('fs');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html');
});

app.get('/getData', function(req, res){
  
	var file = __dirname + '/data.json';

	fs.readFile(file, 'utf8', function (err, data) {
	  if (err) {
	    console.log('Error: ' + err);
	    return;
	  }

	  data = JSON.parse(data);
	  res.send(data);
	});
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

