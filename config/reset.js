var firebaseconfig= require('./config');
var firebase=require('firebase');


var reset= function(email) {

  var auth = firebase.auth();
  var emailAddress = email;

  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });

}
