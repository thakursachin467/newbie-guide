var firebaseconfig= require('./config');
var firebase=require('firebase');


var signup= function(email,password){
  var sigin =firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // ...
  });



}




module.exports= signup;
