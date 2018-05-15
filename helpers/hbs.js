module.exports =  {
        admin: function(userid) {
            if(userid==null){
              return false;
            }
            else {
            if(userid.isAdmin) {
              return false;
            }
            else {
              return true;
            }
          }
        }
}
