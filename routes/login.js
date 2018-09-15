var users= require('../models/user');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
module.exports = function(app,passport) {

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());

  app.get('/login',(req, res)=>{
      res.render('users/login');
  });

          app.post('/login',
              passport.authenticate('local', {
                successRedirect: '/dashboard',
                failureRedirect: '/login',
                failureFlash: true })
  );


  app.get('/logout',(req,res)=>{
        req.logout();
       req.flash('success_msg','you are sucessfully logged out');
        res.redirect('/login');

  });



  app.post('/register',(req,res)=>{
    let errors=[];
    var admin= false;
    var teacher= false;
    if(req.body.admin === 'adminforthis') {
      admin =true;
    }
    if(req.body.teacher === 'thisforteacher') {
      teacher =true;
    }
    if(req.body.password!= req.body.password1) {
      errors.push({text:'Your passwords did not match'});
    }
    if(req.body.email!= req.body.email1) {
      errors.push({text:'Your emails did not match'});
    }
    if(req.body.password.length<4){
      errors.push({text:'Password should be more then 4 characters'});
    }
    if(errors.length>0){
      res.render('users/login',{
        errors:errors,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        email1:req.body.email1,
        password:req.body.password,
        password1:req.body.password1
      });
    }
    else {
      users.findOne({email:req.body.email})
      .then((data)=>{
        if(data) {
          req.flash('error_msg','user already exists with this email');
          res.redirect('/login');
        }
        else {
            var user = users({
              email:req.body.email,
              firstname:req.body.firstname,
              lastname:req.body.lastname,
              password:req.body.password,
              isAdmin:admin,
              isTeacher: teacher
            });
            bcrypt.genSalt(10,function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err){
                  throw err;
                }
                else {
                    user.password= hash;
                    user.save()
                    .then(()=>{
                        req.flash('success_msg','Your account sucessfully created,please login');
                        res.redirect('/login');
                    });
                }
              });




      });

    }

});

}

  });

}
