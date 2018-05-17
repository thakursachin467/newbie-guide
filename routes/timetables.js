var databaseinfo = require('../config/config');
var mongoose = require('mongoose');
var Grid= require('gridfs-stream');
var crypto= require('crypto');
var path= require('path');
var multer = require('multer');
var teachers= require('../models/teacher');
var GridFsStorage= require('multer-gridfs-storage');

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


app.post('/upload/timetable',upload.single('FileUpload'),(req,res)=>{

      //res.json({file:req.file});
        console.log(req.file);
        teachers.update({user:req.user._id},{$set:{timetable:req.file.filename}},(err,data)=>{
            req.flash('success_msg','Data Saved');
            res.redirect('/dashboard/teacher');
        })

})
}
