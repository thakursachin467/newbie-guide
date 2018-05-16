var express = require('express');
var exphbs = require('express-handlebars');
var pages= require('./routes/pages');
var login= require('./routes/login');
var adminroute= require('./routes/admin');
var dashboard= require('./routes/dashboard');
var database= require('./database/connect');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var pasportConfig= require('./config/passport');
const {admin,formatdate}=require('./helpers/hbs');
var app=express();


var port= process.env.PORT ||3000;
app.use('/assests',express.static(__dirname +'/public'));

app.engine('handlebars', exphbs({helpers:{
	admin:admin,
	formatdate:formatdate
},defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// parse application/json
app.use(bodyParser.json());

//express sessions middleware
app.use(session({
	secret: 'keyboard$',
	resave: true,
	saveUninitialized: true
}));


 //flash middleware
 app.use(flash());

 //passport middleware
 app.use(passport.initialize());
 app.use(passport.session());

 //method override middleware
 app.use(methodOverride('_method'));

 //global variables
  app.use(function(req,res,next) {

     res.locals.success_msg= req.flash('success_msg');
     res.locals.error_msg= req.flash('error_msg');
     res.locals.error= req.flash('error');
     res.locals.userid=req.user || null;
		 res.locals.session=req.session;
       next();

 });


app.get('/', function(req, res) {
	res.render('users/home');
});

app.get('/forums',(req,res)=>{
			res.redirect('https://limitless-coast-94059.herokuapp.com/')
});

app.get('/foodcourt',(req,res)=>{
			res.redirect('https://online-food-recharge.herokuapp.com/');
});



//will handle only small pages route
pages(app);

//will handle all the dashboard routes here
dashboard(app);

//will handle all the login logout and register routes
login(app,passport);
//to config our local Strategy with the login
pasportConfig(passport);

//show all admin related routes

adminroute(app);


database.databaseconnectionusers();

app.listen(port);
