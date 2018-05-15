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
      type: Number,
      require:true
},
type :{
  type: String,
  require: true
},
user: {
  type: String

}

});


var complain = mongoose.model('complain',complainSchema);
module.exports= complain;
