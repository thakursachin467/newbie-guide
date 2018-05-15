module.exports = function(app) {
        app.get('/dashboard',(req,res)=>{

                if(req.user.isTeacher){
                  res.redirect('/dashboard/teacher');
                }
                else if (req.user.isAdmin) {
                    res.redirect('/dashboard/admin');
                }
                else{
                  res.redirect('/dashboard/student');
                }

        });

        app.get('/dashboard/student',(req,res)=>{
                res.render('dashboard/student');
        });

        app.get('/dashboard/admin',(req,res)=>{
              res.render('dashboard/admin');
              console.log(req.user);
        });

        app.get('/dashboard/teacher',(req,res)=>{
                res.render('dashboard/teacher');
        });
}
