var databaseinfo = require('../config/config');
var mongoose = require('mongoose');


module.exports = {
  databaseconnectionusers:function(){
  var url = databaseinfo.databaseurluser();
mongoose.connect(url)
  .then(()=>{
    console.log("database connected");
  })
  .catch(()=>{

    console.log("error");
  });




}




}
