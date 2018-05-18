var complains= require('../models/complain');
var locations= require('../models/college');
var teachers= require('../models/teacher');
var events= require('../models/events');
var mongoose= require('mongoose');
var {ensureAuthenticated,ensureAdmin,ensureTeacher}= require('../helpers/auth');

module.exports= function(app) {


      app.post('/complain',ensureAuthenticated,(req,res)=>{
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

      app.post('/locations',ensureAdmin,(req,res)=>{
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

      app.post('/locations/edit/:id',ensureAdmin,(req,res)=>{
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

      //add teachers info here
      app.post('/teachers/add',ensureTeacher,(req,res)=>{
        teachers.findOne({user:req.user._id})
        .then((data)=>{
          if(data){
            req.flash('error_msg','Data for this user already existes');
            res.redirect('/dashboard/teacher');
          }
          else{
            var firstname= req.body.firstname;
            var lastname= req.body.lastname;
            var email= req.body.email;
            var branch= req.body.branch;
            var staffroom= req.body.staffroom;
            var phonenumber= req.body.phonenumber;
            var user= req.user._id;
            var teacher = new teachers({
              firstname:firstname,
              lastname:lastname,
              email:email,
              branch:branch,
              staffroom:staffroom,
              phonenumber:phonenumber,
              user:user
            })

            teacher.save()
            .then(()=>{
              req.flash('success_msg','Data Saved');
              res.redirect('/dashboard/teacher');
            });
          }
        })

      });

      app.get('/teacher/info/:id',ensureTeacher,(req,res)=>{
        teachers.findOne({user:req.params.id})
        .then((data)=>{
            res.render('teachers/edit',{
              data:data
            });
        });

      });

      app.post('/teachers/update/:id',ensureTeacher,(req,res)=>{
          teachers.findOneAndUpdate({user:req.params.id},{
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.lastname,
            phonenumber:req.body.phonenumber,
            staffroom:req.body.staffroom,
            branch:req.body.branch
          })
          .then(()=>{
            req.flash('success_msg','Data Updated');
            res.redirect('/dashboard/teacher');
          })

      });

      app.get('/timetable/add',ensureTeacher,(req,res)=>{
          res.render('teachers/timetable');
      });

      app.post('/event',(req,res)=>{
            console.log(req.body);
            var meet= new events({
              email:req.body.contact,
              name:req.body.title,
              organizer:req.body.organizer,
              description:req.body.description,
              register:req.body.register,
              time:req.body.time,
              date:req.body.date,
              venue:req.body.venue
            })
            meet.save()
            .then(()=>{
              res.redirect('/dashboard/admin');
            })
      });


      app.get('/events/show',ensureAuthenticated,(req,res)=>{
        if(req.query.search){
          const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            events.find({name:regex})
            .then((data)=>{
              res.render('users/showevents',{
                data:data,
                query:req.query.search
              })
            })
        }
        else{
        events.find({})
        .then((data)=>{
          res.render('users/showevents',{
            data:data,
            query:'Events'
          })
        })
}
      });

      app.get('/teacher/show',ensureAuthenticated,(req,res)=>{
        if(req.query.search){
          const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            teachers.find({firstname:regex})
            .then((data)=>{
              res.render('users/showteacher',{
                data:data,
                query:req.query.search,
                input:req.query.search
              })
            })
        }
        else if (req.query.branch) {
          const regex = new RegExp(escapeRegex(req.query.branch), 'gi');
            teachers.find({branch:regex})
            .then((data)=>{
              res.render('users/showteacher',{
                data:data,
                query:req.query.branch,
                input: req.query.branch
              })
            })
        }
        else{
        teachers.find({})
        .then((data)=>{
          res.render('users/showteacher',{
            data:data,
            query:'Teachers',
            input: ''
          })
        })
}
      });


      function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

}
