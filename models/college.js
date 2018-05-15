var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var collegeSchema = new Schema ({
  place : {
      type: String,
      require:true
  },
  description :{
    type:String
  },
  location:{
    type:String
  }

});


var college = mongoose.model('college',collegeSchema);
module.exports= college;
