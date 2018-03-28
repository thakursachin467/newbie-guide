var signup= require('../config/signup');
var signin1= require('../config/signin');
var sociallogin= require('../config/sociallogin');
var sociallogin= require('../config/reset');
var bodyParser = require('body-parser');

module.exports= function(app){
      app.use(bodyParser.urlencoded({ extended: true }));

      app.post('/signin',function(req,res){

      });

      app.post('/signup',function(req,res){


      });

      app.post('/forgot',function(req,res){
        var email= req.body.password;


      });

}
