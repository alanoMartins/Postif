//Database
var pg = require('pg');

//var conString = "postgres://postif:postifix@localhost:5432/postifdb"; // Local
var conString = "postgres://shgjgtwfzvknmy:MhjLzgGTzmByTGzNLHJ5I_BGk8@ec2-54-243-149-147.compute-1.amazonaws.com:5432/dbhchj9jer61jt"; // Heroku

Models = {
	Users: {},
	Cards: {}
}


Models.init = function(){
	//Prepare db
}

Models.Users.login = function(name, password, onDone, onError) {
	pg.connect(conString, function(err, client, done) {

		var query = client.query({
	      text: 'SELECT * FROM "Users" Where name = $1 and password = $2',
	      values: [name, password],
	    }, function(err, result) {
	    	
	    	if(result != undefined && result.rowCount == 0){
	    		err = "user.not.found";
	    	}

	    	if(err){
				onError(err);
			} else {
				onDone(result.rows[0]);		
			}
	    });	

	    query.on('end', client.end.bind(client));
	});
}

Models.Users.get = function(token, onDone, onError) {
	pg.connect(conString, function(err, client, done) {

		var query = client.query({
	      text: 'SELECT * FROM "Users" Where lasttoken = $1',
	      values: [token],
	    }, function(err, result) {
	    	
	    	if(result != undefined && result.rowCount == 0){
	    		err = "user.not.found";
	    	}

	    	if(err){
				onError(err);
			} else {
				onDone(result.rows[0]);		
			}
	    });	

	    query.on('end', client.end.bind(client));
	});
}

Models.Users.logout = function(token, onDone, onError) {
	pg.connect(conString, function(err, client, done) {

		var query = client.query({
	      text: 'UPDATE "Users" SET lastToken = "" WHERE lastToken = $1',
	      values: [token],
	    }, function(err, result) {

	    	console.log("LOGOUT");

	    	console.log(err);
	    	console.log(result);
	    	
	    	if(result != undefined && result.rowCount == 0){
	    		err = "user.not.auth";
	    	}

	    	if(err){
				onError(err);
			} else {
				onDone( { name: result.rows[0] } );	
			}
	    });	

	    query.on('end', client.end.bind(client));
	});
}

Models.Users.updateToken = function(id, token, onDone, onError) {
	pg.connect(conString, function(err, client, done) {

		var query = client.query({
	      text: 'UPDATE "Users" SET lastToken = $1 WHERE id = $2',
	      values: [token, id],
	    }, function(err, result) {

	    	if(result != undefined && result.rowCount == 0){
	    		err = "token.not.updated";
	    	}

	    	if(err){
				onError(err);
			} else {
				onDone( { name: result.rows[0] } );	
			}
	    });	

	    query.on('end', client.end.bind(client));
	});
}

Models.Users.auth = function(token, onDone, onError) {
	pg.connect(conString, function(err, client, done) {

		var query = client.query({
	      text: 'SELECT * FROM "Users" Where lasttoken = $1',
	      values: [token],
	    }, function(err, result) {
	    	
	    	if(result != undefined && result.rowCount == 0){
	    		err = "user.not.auth";
	    	}

	    	if(err){
				onError(err);
			} else {
				onDone(result.rows[0]);		
			}
	    });	

	    query.on('end', client.end.bind(client));
	});
}


Models.Cards.list = function(owner, onDone, onError) {
	pg.connect(conString, function(err, client, done) {

		var query = client.query({
	      text: 'SELECT * FROM "Card" Where owner = $1',
	      values: [owner],
	    }, function(err, result) {

	    	if(result != undefined && result.rowCount == 0){
	    		err = "card.not.found";
	    	}

	    	if(err){
				onError(err);
			} else {
				onDone(result.rows);	
			}
	    });	

	    query.on('end', client.end.bind(client));
	});
}


Models.Users.generateToken = function (){
	return Math.random().toString(36).substr(2);
}

module.exports = Models;