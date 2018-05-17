var mongoose= require('mongoose');
var Schema = mongoose.Schema;



var teacherSchema = new Schema ({
  email : {
      type: String,
      require:true
  },
  firstname:{
    type:String
  },
  lastname:{
    type:String
  },
  staffroom:{
      type: String,
      require:true
},
phonenumber :{
  type: Number,
  require: true
},
branch :{
  type:String,
  require: true
},
user: {
  type: String,

},
timetable:{
  type: String
}

});


var teacher = mongoose.model('teachers',teacherSchema);
module.exports= teacher;
