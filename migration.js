//Database
var pg = require('pg');

//var conString = "postgres://postif:postifix@localhost:5432/postifdb"; // Local
var conString = "postgres://shgjgtwfzvknmy:MhjLzgGTzmByTGzNLHJ5I_BGk8@ec2-54-243-149-147.compute-1.amazonaws.com:5432/dbhchj9jer61jt"; // Heroku

Migration = {
	Users: {},
	Cards: {}
}


Migration.init = function(){
	//Prepare db
}

Migration.Users.table = function() {

	console.log("Create user table");

	pg.connect(conString, function(err, client, done) {

		var createStatement = 'CREATE TABLE "Users" ' +
			'(' +
			  'id serial NOT NULL,' +
			  'name character varying(100),' +
			  'password character varying(100),' + 
			  'lasttoken character varying(50),' + 
			  'CONSTRAINT "User_pkey" PRIMARY KEY (id)' + 
			');'

		console.log("Execute query");

		query = client.query(createStatement);


		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.table = function() {
	pg.connect(conString, function(err, client, done) {

		var createStatement = 'CREATE TABLE "Card" ' +
			'(' +
			  'id serial NOT NULL, ' +
			  'title character varying(100), ' +
			  'description character varying(200), ' +
			  'owner bigint NOT NULL, ' +
			  'CONSTRAINT "Card_pkey" PRIMARY KEY (id), ' +
			  'CONSTRAINT owner_fk FOREIGN KEY (owner) ' +
			      'REFERENCES "Users" (id) MATCH SIMPLE ' +
			      'ON UPDATE NO ACTION ON DELETE CASCADE ' +
			');'

		query = client.query(createStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Users.insert = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, name, password, lasttoken)'+
    		'VALUES (1,  \'alano\', \'fc80942d9b685f87e8ac743073e84cda\', \'\');'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

module.exports = Migration;