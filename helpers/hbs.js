var moment= require('moment');
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
        },
        formatdate:function(date,format) {
              return moment(date).utcOffset("+05:30").format(format);
              //var local = moment(stillUtc).local().format(format);
              //return moment(date).format(format);
              //return local;
        },
        check: function(text) {
          if(text===''){
            return false;
          }
          else {
            return true;
          }
        },
        formattime:function(date,format) {
              return moment(date).utcOffset("+06:30").format(format);
              //var local = moment(stillUtc).local().format(format);
              //return moment(date).format(format);
              //return local;
        }
}
