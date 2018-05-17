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
  },
  floor : {
    type: String,

  },
  date: {
    type: Date,
    default:Date.now(),
    require:true
  }

});


var college = mongoose.model('college',collegeSchema);
module.exports= college;
