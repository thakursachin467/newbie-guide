var firebase=require('firebase');
var config = {
   apiKey: "AIzaSyAxrPcbdTtSnYehny6U70o48yjWA1dJnj8",
   authDomain: "newbie-guide.firebaseapp.com",
   databaseURL: "https://newbie-guide.firebaseio.com",
   projectId: "newbie-guide",
   storageBucket: "newbie-guide.appspot.com",
   messagingSenderId: "29361991025"
 };
var fire=firebase.initializeApp(config);

module.exports=fire;
