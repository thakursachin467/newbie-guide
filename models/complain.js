var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var complainSchema = new Schema ({
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
  body:{
      type: String,
      require:true
},
subject :{
  type: String
},
user: {
  type: String

},
date:{
  type: Date,
  default: Date.now(),
  require: true
}

});


var complain = mongoose.model('complain',complainSchema);
module.exports= complain;
