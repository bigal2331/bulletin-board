var express = require('express');
var path = require('path');
var react = require('react');
var app = express();


app.get('/',function(request, response){

	response.send('<h1>this is a test fam</h1>');

});

app.listen(3000, function(){
	console.log('listening at port 3000');
})