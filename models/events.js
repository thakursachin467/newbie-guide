var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var eventSchema = new Schema ({
  email : {
      type: String,
      require:true
  },
  name:{
    type:String
  },
  description:{
      type: String,
      require:true
},
date :{
  type: String,
  require: true
},
organizer :{
  type:String,
  require: true
},
time: {
  type: String,

},
register:{
  type: String
},
venue:{
  type: String
}

});


var events = mongoose.model('events',eventSchema);
module.exports= events;
