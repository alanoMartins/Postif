//Database
var pg = require('pg');

var conString = "postgres://postif:postifix@localhost:5432/postifdb";

Models = {
	Users: {},
	Cards: {}
}


Models.init = function(){
	//Prepare db
}

Models.Users.list = function(onDone, onError) {

	pg.connect(conString, function(err, client, done) {

		var query = client.query('SELECT * FROM "Users"', function(err, result) {
			if(err){
				onError(err);
			} else {
				onDone(result.rows);	
			}
			
		});

	    query.on('end', client.end.bind(client)); //disconnect client manually
	});
}

Models.Users.get = function(id, onDone, onError) {

	pg.connect(conString, function(err, client, done) {


		var query = client.query({
	      text: 'SELECT * FROM "Users" Where id = $1',
	      values: [id],
	    });	

		query.on('row', function(row) {
			onDone(row);
	    });

	    query.on('error', function(error) {
	      onError(error);
	    });

	    query.on('end', client.end.bind(client)); //disconnect client manually
	});
}

module.exports = Models;