var express = require('express');
var path = require('path');
// var react = require('react');
var app = express();

app.set('views',path.join(__dirname,'views'));

app.get('/',function(request, response){
	//this renders index.html
	response.render('index');

});

app.listen(3000, function(){
	console.log('listening at port 3000');
})