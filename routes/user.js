var express = require('express');
var router = express.Router();

var models = require('../models');

/* GET users listing. */
router.get('/:user_id', function(req, res, next) {

	models.Users.get(req.params.user_id, function(user){
		res.send(JSON.stringify(user));
	},
	function(error){
		res.send(error);	
	});

	// On error callback

});


router.get('/', function(req, res, next) {
	models.Users.list(function(users){
		res.send(JSON.stringify(users));
	},
	function(error){
		res.send(error);	
	});

	// On error callback

});


router.post('/login', function(req, res, next) {

		models.Users.login(req.body.username, req.body.password, function(user){
			res.send(JSON.stringify(user));
		},
		function(error){
			res.status(403).send({type:'Error', message: error});
		});

		// On error callback

	});

module.exports = router;
