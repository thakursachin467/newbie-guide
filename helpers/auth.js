module.exports = {
  ensureAuthenticated:function(req,res,next) {
        if(req.isAuthenticated()){
          return next();
        }
        req.flash('error_msg','Please login first');
        res.redirect('/login');
  },
  ensureAdmin:function(req,res,next) {
        if(req.isAuthenticated() && req.user.isAdmin ){
          return next();
        }
        req.flash('error_msg','Not allowed');
        res.redirect('/dashboard');
  },
  ensureTeacher:function(req,res,next) {
        if(req.isAuthenticated() && req.user.isTeacher){
          return next();
        }
        req.flash('error_msg','Not allowed');
        res.redirect('/dashboard');
  }
}
