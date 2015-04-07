var MongoClient = require('mongodb').MongoClient,
	fs = require('fs');

//To import: mongoimport -d localhostDB -c nghiportfolio --file data.json --jsonArray
// To export: http://docs.mongodb.org/manual/reference/program/mongoexport/#bin.mongoexport

MongoClient.connect('mongodb://localhost:27017/localhostDB',function(err,db){
	if(err) throw err;
	var callback = function(err,result){
		if(err) throw err; 
		//console.log(result);
		db.close();
	};
	//add a new field
	// var query={}, 
	// 	update={$set : {"rankId":1}};
	// 	options={upsert:false,multi:true};

	// db.collection('nghiportfolio').update(query,update,options,callback);


	//Write data to file
	db.collection('nghiportfolio').find({}).toArray(function(err,result){
		if(err) throw err; 
		result =JSON.stringify(result);
		
		fs.writeFile("./datatest.json", result,'utf-8', function(err) {
		    if(err) throw err;
		    console.log("The file was saved!");
		});

		db.close();
	});
	
	


});

