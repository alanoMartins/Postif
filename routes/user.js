var express = require('express');
var router = express.Router();

var models = require('../models');


router.post('/login', function(req, res, next) {

	models.Users.login(req.body.username, req.body.password, function(user){

		var newToken = models.Users.generateToken();

		models.Users.updateToken(user.id, newToken, function() {

			res.send(JSON.stringify({token: newToken}));

		}, function(error){
			res.status(400).send({type:'Error', message: error});
		});

		
	},
	function(error){
		res.status(403).send({type:'Error', message: error});
	});
});


router.post('/logout', function(req, res, next) {

		models.Users.logout(req.body.token, function(user){
			res.send(JSON.stringify({message: "Logout"}));
		},
		function(error){
			res.status(403).send({type:'Error', message: error});
		});
	});



module.exports = router;
