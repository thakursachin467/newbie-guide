var databaseinfo = require('../config/config');
var mongoose = require('mongoose');
var Grid= require('gridfs-stream');
var crypto= require('crypto');
var path= require('path');
var multer = require('multer');
var teachers= require('../models/teacher');
var GridFsStorage= require('multer-gridfs-storage');
var {ensureAuthenticated,ensureAdmin,ensureTeacher}= require('../helpers/auth');
module.exports= function(app) {

  var url = databaseinfo.databaseurluser();
  var conn = mongoose.createConnection(url);
let gfs ;
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('timetable');


});

//creating storage engine
const storage = new GridFsStorage({
  url: url,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'timetable'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });


app.post('/upload/timetable',upload.single('FileUpload'),ensureTeacher,(req,res)=>{

      //res.json({file:req.file});
        console.log(req.file);
        teachers.update({user:req.user._id},{$set:{timetable:req.file.filename}},(err,data)=>{
            req.flash('success_msg','Data Saved');
            res.redirect('/dashboard/teacher');
        })

});

//find a perticular image
app.get('/timetable/show/:id',(req,res)=>{
      gfs.files.findOne({filename:req.params.id},(err,file)=>{
        if(!file || file.length==0) {
          res.status(404).json({
            err:'No images found'
          });
        }

        //res.json(file.uploadDate);
        if(file.contentType=="image/jpeg" || file.contentType=="img/png" ) {
          //read the output stream
          var readstream = gfs.createReadStream(file.filename);
          readstream.pipe(res);
        }
        else {
          res.status(404).json({
            err:'Not an images '
          });
        }
      })
});


}
