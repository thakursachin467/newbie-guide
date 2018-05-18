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

    app.get('/info/add',(req,res)=>{
        res.render('admin/info');
    });

    app.get('/quicklinks/appliedscience',(req,res)=>{
        res.render('pages/appliedeng')
    });
    app.get('/quicklinks/artsanddesign',(req,res)=>{
        res.render('pages/artsanddesign')
    });
    app.get('/quicklinks/Banking',(req,res)=>{
        res.render('pages/banking')
    });

    app.get('/quicklinks/buisness',(req,res)=>{
        res.render('pages/buisness');
    });
    app.get('/quicklinks/cultural',(req,res)=>{
        res.render('pages/cultural')
    });
    app.get('/quicklinks/engineering',(req,res)=>{
        res.render('pages/engineering')
    });
    app.get('/quicklinks/hostels',(req,res)=>{
        res.render('pages/hostels')
    });
    app.get('/quicklinks/library',(req,res)=>{
        res.render('pages/library')
    });

    app.get('/quicklinks/planning',(req,res)=>{
        res.render('pages/planning')
    });

    app.get('/quicklinks/retail',(req,res)=>{
        res.render('pages/retail')
    });
    app.get('/quicklinks/sports',(req,res)=>{
        res.render('pages/sports')
    });

    app.get('/quicklinks/transport',(req,res)=>{
        res.render('pages/transport')
    });





}
