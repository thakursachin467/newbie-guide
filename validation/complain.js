var config= require('../config/config');
var bodyParser = require('body-parser');
var firebase=require('firebase');

var messeges=firebase.database().ref('complain');


module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));

app.post('/complain',function(req,res){

          var firstname=req.body.firstname;
          var lastname=req.body.lastname;
          var email=req.body.email;
          var complain=req.body.complain;

          savemessege(firstname,lastname,email,complain);


          function savemessege(firstname,lastname,email,complain) {
	             var newmesseges= messeges.push();
	              newmesseges.set({
		                firstname:firstname,
		                  lastname:lastname,
		                    email:email,
		                      complain:complain
	}).then(() => {
    var url= req.get('referer');
        res.redirect(url + '#!/complain');
  });


}

});

}
