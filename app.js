var express = require('express');
var firebase = require("firebase");
var signin = require('./validation/signin');
var complain = require('./validation/complain');
var teachersInfo =require('./validation/teachersInfo');
var exphbs = require('express-handlebars');



var app=express();


var port= process.env.PORT ||3000;
app.use('/assests',express.static(__dirname +'/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//app.set('view engine','ejs');

app.get('/', function(req, res) {
	res.render('users/index');
});

app.get('/admin',(req,res)=>{
		res.send("admin");
});

app.get('/login',(req, res)=>{
		res.render('users/login');
});


app.get('/*', function(req, res) {
	res.render('users/index');
});

signin(app);
complain(app);
teachersInfo(app);

app.listen(port);
