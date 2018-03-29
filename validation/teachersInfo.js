var config= require('../config/config');
var bodyParser = require('body-parser');
var firebase=require('firebase');


var teacherdata=[]
var path=firebase.database().ref('user');


module.exports = function(app) {


  app.get('/api/teachersinfo',function(req,res){
      path.on('value',sucess,error);

        function sucess(data) {
	               var data=data.val();
	                 var keys=Object.keys(data);
	                   for(var i=0;i<keys.length;i++) {
		                     var k=keys[i];
		                       var ref=firebase.database().ref('user').child(k);
		                         ref.on('value',sucess1,error1);
	                          }

                          }

                          function sucess1(data) {
	                           var data=data.val();
	                            var keys=Object.keys(data);
	                             for(var i=0;i<keys.length;i++) {
		                               var k=keys[i];

                                   teacherdata.push(data[k]);
    //console.log(teacherdata);

	}
      res.send(teacherdata);

}




function error1(err) {
	res.send(err);
}

function error(err) {
	res.send(err);
}


});

}
