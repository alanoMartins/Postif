var models = require('../models');

module.exports = function() {
  return function(req, res, next) {

  	console.log("AUTH");

  	if(req.method == "POST" || req.method == "GET") {

		var token = req.get("authorization");

		Models.Users.auth(token, function(){
			console.log("AUTH1");
			next();
		}, function(err){
			console.log("AUTH2");
			res.status(403).send({type:'Error', message: err});
		})	
  	} else {
  		next();
  	}

  	
  };
}