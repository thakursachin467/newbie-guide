var configvalues = require('./database');

module.exports = {

    databaseurluser :function() {
        return "mongodb://"+configvalues.uname + ":" + configvalues.upwd + "@ds219130.mlab.com:19130/newbie-guide";
    }


}
