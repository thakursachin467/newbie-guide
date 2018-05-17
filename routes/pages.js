module.exports = function(app) {
    app.get('/quicklinks/aboutus',(req,res)=>{
          res.render('pages/about');
    });

    app.get('/quicklinks/admissions',(req,res)=>{
          res.render('pages/admissions');
    });

    app.get('/quicklinks/facilities',(req,res)=>{
            res.render('pages/facilities');
    });

    app.get('/quicklinks/placements',(req,res)=>{
            res.render('pages/placements');
    });

    app.get('/quicklinks/researches',(req,res)=>{
            res.render('pages/researches');
    });

    app.get('/quicklinks/complain',(req,res)=>{
            res.render('pages/complain');
    });

    app.get('/quicklinks/Campuslife',(req,res)=>{
            res.render('pages/campuslife');
    });

    app.get('/quicklinks/contactus',(req,res)=>{
            res.render('pages/contact');
    });

    app.get('/complain',(req,res)=>{
        res.render('pages/complain');
    });

    app.get('/locations/add',(req,res)=>{
          res.render('pages/location');
    });

    app.get('/teacher/info',(req,res)=>{
      res.render('teachers/add');
    })

    
}
