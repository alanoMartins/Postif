var express = require('express');
var router = express.Router();

var models = require('../models');

router.post('/list', function(req, res, next) {

		models.Users.get(req.body.token, function(user){

			models.Cards.list(user.id, function(cards){
				res.send(JSON.stringify(cards));
			},
			function(error){
				res.status(400).send({type:'Error', message: error});
			});

		},
		function(error){
			res.status(403).send({type:'Error', message: error});
		});

		
	});

module.exports = router;
