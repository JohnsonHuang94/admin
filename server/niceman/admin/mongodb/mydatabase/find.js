var adminUser = require("./schema/adminUser.js");


adminUser.find({},{userpwd:1}, function(err, doc){
		console.log(doc)
	})