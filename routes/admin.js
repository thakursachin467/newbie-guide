var users= require('../models/user');
var complains= require('../models/complain');
var locations= require('../models/college');
var mongoose= require('mongoose');
var {ensureAuthenticated,ensureAdmin,ensureTeacher}= require('../helpers/auth');
module.exports= function(app) {

        //get all the students info from our database
        app.get('/users/students',ensureAdmin,(req,res)=>{
            users.find({isTeacher:false})
            .where('isAdmin').equals(false)
            .then((data)=>{
                res.render('admin/students',{
                  data:data
                });
            })

        });
        //delete  a student from the database
        app.delete('/users/:id',ensureAdmin,(req,res)=>{
            users.findOneAndRemove({_id:req.params.id})
            .then((data)=>{
              res.redirect('/users/students');
            });
        });

        //get all the teachers info from database
        app.get('/users/teachers',ensureAdmin,(req,res)=>{
            users.find({isTeacher:true})
            .then((data)=>{
                res.render('admin/teachers',{
                  data:data
                });
            })

        });


        //recent users are shown here only 7 at a time
        app.get('/users/all',ensureAdmin,(req,res)=>{
            users.find()
            .sort({'_id':-1})
            .limit(7)
            .then((data)=>{
              res.render('admin/users',{
                data:data
              })
            });
        });

        //show all complain by the users in admins account

        app.get('/complains/all',ensureAdmin,(req,res)=>{
              complains.find()
              .then((data)=>{
                  res.render('admin/complain',{
                    data:data
                  });
              })

        });
        //show all locations here
        app.get('/locations',ensureAdmin,(req,res)=>{
              locations.find()
              .then((data)=>{
                res.render('admin/locations',{
                  data:data
                })
              })
        });

        //edit a location
        app.get('/locations/:id',ensureAdmin,(req,res)=>{
            locations.findOne({_id:req.params.id})
            .then((data)=>{
              console.log(data);
              res.render('admin/edit',{
                data:data
              });
            });
        });





}
