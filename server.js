
// npm install express-react-views
var ReactEngine = require('express-react-engine');
var express = require('express');

var app = express();

app.set('views', __dirname + '/components');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/',function(request, response, next){
	
	response.render('index.jsx');

});
app.get('/new',function(request, response, next){

	response.render('new.jsx');

});

app.listen(8080, function(){
	console.log('listening at port 8080');
})

// nodemon ./bulletin-board/server.js