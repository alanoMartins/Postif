var express = require('express');
var router = express.Router();

var models = require('../models');

router.post('/list', function(req, res, next) {

		// models.Cards.list(req.body.owner, function(cards){
		// 	res.send(JSON.stringify(cards));
		// },
		// function(error){
		// 	res.status(400).send({type:'Error', message: error});
		// });

		var cards = [{title: "Card 1", description: "New card", owner: "alano"}]
		res.send(JSON.stringify(cards));

	});

module.exports = router;
