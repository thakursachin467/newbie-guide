var users= require('../models/user');
var mongoose= require('mongoose');
module.exports= function(app) {

        //get all the students info from our database
        app.get('/users/students',(req,res)=>{
            users.find({isTeacher:false})
            .where('isAdmin').equals(false)
            .then((data)=>{
                res.render('admin/students',{
                  data:data
                });
            })

        });
        //delete  a student from the database
        app.delete('/users/:id',(req,res)=>{
            users.findOneAndRemove({_id:req.params.id})
            .then((data)=>{
              res.redirect('/users/students');
            });
        });

        //get all the teachers info from database
        app.get('/users/teachers',(req,res)=>{
            users.find({isTeacher:true})
            .then((data)=>{
                res.render('admin/teachers',{
                  data:data
                });
            })

        });


        //recent users are shown here only 7 at a time
        app.get('/users/all',(req,res)=>{
            users.find()
            .sort({'_id':-1})
            .limit(7)
            .then((data)=>{
              res.render('admin/users',{
                data:data
              })
            });
        });



}
