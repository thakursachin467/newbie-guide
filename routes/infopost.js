var complains= require('../models/complain');
var locations= require('../models/college');
var mongoose= require('mongoose');
module.exports= function(app) {


      app.post('/complain',(req,res)=>{
          var email= req.body.email;
          var firstname= req.body.firstname;
          var lastname= req.body.lastname;
          var subject= req.body.subject;
          var body= req.body.complain;
          var user= req.user._id;

          var complain= new complains({
            email:email,
            firstname:firstname,
            lastname:lastname,
            subject:subject,
            body:body,
            user:user
          });

          complain.save()
          .then(()=>{
            res.redirect('/dashboard');
          })

      });

      app.post('/locations',(req,res)=>{
        var place= req.body.place;
        var description= req.body.description;
        var location= req.body.location;
        var floor= req.body.floor;
          var  location = new locations({
                place:place,
                description:description,
                location:location,
                floor:floor
          });
          location.save()
          .then(()=>{
            req.flash('success_msg','Data Saved');
            res.redirect('/locations/add');
          });
      });

      app.post('/locations/edit/:id',(req,res)=>{
        var place= req.body.place;
        var description= req.body.description;
        var location= req.body.location;
        var floor= req.body.floor;
        locations.findOneAndUpdate({_id:req.params.id},{
          place:place,
          description:description,
          location:location,
          floor:floor
        })
          .then(()=>{
            req.flash('success_msg','Data Updated');
            res.redirect('/locations');
          });
      });



}
