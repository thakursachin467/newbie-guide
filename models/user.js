var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema ({
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
  password:{
      type:String,
      require:true
},
isAdmin :{
  type: Boolean,
  default: false
},
isTeacher:{
  type:Boolean,
  default: false
}

});


var user = mongoose.model('users',usersSchema);
module.exports= user;
