var express = require('express');
var firebase = require("firebase");
var signin = require('./validation/signin');
var complain = require('./validation/complain');
var teachersInfo =require('./validation/teachersInfo');




var app=express();


var port= process.env.PORT ||3000;
app.use('/assests',express.static(__dirname +'/public'));

app.set('view engine','ejs');

app.get('/', function(req, res) {
	res.render('index');
});

signin(app);
complain(app);
teachersInfo(app);

app.listen(port);
