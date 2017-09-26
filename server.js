
// npm install express-react-views
var ReactEngine = require('express-react-engine');
var express = require('express');

var app = express();

app.set('views', __dirname + '/components');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/',function(request, response, next){
	//this renders index.html
	response.render('index.jsx');

});

app.listen(3000, function(){
	console.log('listening at port 3000');
})