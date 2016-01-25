var models = require('../models');

module.exports = function() {
  return function(req, res, next) {

  	if(req.method == "POST" || req.method == "GET") {

		var token = req.get("authorization");

		Models.Users.auth(token, function(){
			next();
		}, function(err){
			res.status(403).send({type:'Error', message: err});
		})	
  	} else {
  		next();
  	}

  	
  };
}