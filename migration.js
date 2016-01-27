//Database
var pg = require('pg');

//var conString = "postgres://postif:postifix@localhost:5432/postifdb"; // Local
var conString = "postgres://shgjgtwfzvknmy:MhjLzgGTzmByTGzNLHJ5I_BGk8@ec2-54-243-149-147.compute-1.amazonaws.com:5432/dbhchj9jer61jt"; // Heroku

Migration = {
	Users: {},
	Cards: {}
}


Migration.execute = function(){
	migration.Users.table();
	migration.Users.insertUser1();
	migration.Users.insertUser2();

	migration.Cards.table();
	Migration.Cards.Cards1();
	Migration.Cards.Cards2();
	Migration.Cards.Cards3();
	Migration.Cards.Cards4();
	Migration.Cards.Cards5();
	Migration.Cards.Cards6();
	Migration.Cards.Cards7();
	Migration.Cards.Cards8();
	Migration.Cards.Cards9();
	Migration.Cards.Cards10();

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

Migration.Users.insertUser1 = function() {
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

Migration.Users.insertUser2 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, name, password, lasttoken)'+
    		'VALUES (2,  \'paulo\', \'adcebeafbb16fc1ac715d06e0d66b986\', \'\');'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards1 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (1,  \'Card 1\', \'Description A\', 1);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards2 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (2,  \'Card 2\', \'Description B\', 1);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards3 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (3,  \'Card 3\', \'Description C\', 1);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards4 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (4,  \'Card 4\', \'Description D\', 1);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards5 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (5,  \'Card 5\', \'Description E\', 1);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards6 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (6,  \'Card 6\', \'Description F\', 1);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards7 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (7,  \'Card 7\', \'Description G\', 2);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards8 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (8,  \'Card 8\', \'Description H\', 2);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards9 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (9,  \'Card 9\', \'Description I\', 2);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

Migration.Cards.Cards10 = function() {
	pg.connect(conString, function(err, client, done) {

		var insertStatement =  'INSERT INTO "Users"(' +
            'id, title, description, owner)'+
    		'VALUES (10,  \'Card 10\', \'Description J\', 2);'

		query = client.query(insertStatement);

		query.on('error', function(error) {
      		console.log(error);
    	});


	    query.on('end', client.end.bind(client));
	});
}

module.exports = Migration;