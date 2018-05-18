var {ensureAuthenticated,ensureAdmin,ensureTeacher}= require('../helpers/auth');
module.exports = function(app) {
        app.get('/dashboard',ensureAuthenticated,(req,res)=>{

                if(req.user.isTeacher || null){
                  res.redirect('/dashboard/teacher');
                }
                else if (req.user.isAdmin || null) {
                    res.redirect('/dashboard/admin');
                }
                else{
                  res.redirect('/dashboard/student');
                }

        });

        app.get('/dashboard/student',ensureAuthenticated,(req,res)=>{
                res.render('dashboard/student');
        });

        app.get('/dashboard/admin',ensureAdmin,(req,res)=>{
              res.render('dashboard/admin');
              console.log(req.user);
        });

        app.get('/dashboard/teacher',ensureTeacher,(req,res)=>{
                res.render('dashboard/teacher');
        });
}
