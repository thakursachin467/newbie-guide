var databaseinfo = require('../config/config');
var mongoose = require('mongoose');
var Grid= require('gridfs-stream');
var crypto= require('crypto');
var path= require('path');
var multer = require('multer');
var GridFsStorage= require('multer-gridfs-storage');

module.exports =function(app) {

  var url = databaseinfo.databaseurluser();
  var conn = mongoose.createConnection(url);
let gfs ;
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');


})

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
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });
// all set!

app.post('/upload',upload.single('FileUpload'),(req,res)=>{
          res.redirect('/gallery/upload')
      //res.json({file:req.file});
})


//get file upload route
app.get('/gallery/upload',(req,res)=>{
  gfs.files.find().toArray((err,files)=>{
        if(!files || files.length==0) {
          /*res.status(404).json({
            err:'No images found'
          }); */
          res.render('admin/upload',{
            files:false
          });
        }
        else {
          //res.json(files);
          files.map(file=>{
            if(file.contentType=="image/jpeg" || file.contentType=="img/png" ) {
              //read the output stream
              files.isImage=true;
            }
            else {
              files.isImage=false;
            }

          });
          res.render('admin/upload',{
            files:files
          });
        }
  })

});


//get file upload route
app.get('/gallery/user',(req,res)=>{
  gfs.files.find().toArray((err,files)=>{
        if(!files || files.length==0) {
          /*res.status(404).json({
            err:'No images found'
          }); */
          res.render('admin/upload',{
            files:false
          });
        }
        else {
          //res.json(files);
          files.map(file=>{
            if(file.contentType=="image/jpeg" || file.contentType=="img/png" ) {
              //read the output stream
              files.isImage=true;
            }
            else {
              files.isImage=false;
            }

          });
          res.render('users/gallery',{
            files:files
          });
        }
  })

});

//find all images
app.get('/gallery',(req,res)=>{
      gfs.files.find().toArray((err,files)=>{
            if(!files || files.length==0) {
              res.status(404).json({
                err:'No images found'
              });
            }
            else {
            res.json(files);
            }
      })
});

//find a perticular image
app.get('/image/:id',(req,res)=>{
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
//delete an images
app.delete('/file/:id',(req,res)=>{
  gfs.remove({_id:req.params.id,root:'uploads'}, function (err, gridStore) {
if (err) return handleError(err);
console.log('success');
res.redirect('/gallery/upload');
});
});

}
