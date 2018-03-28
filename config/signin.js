var firebaseconfig= require('./config');
var firebase=require('firebase');


var signin= function(email,password){

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  // ...
});



}



module.exports=signin;
