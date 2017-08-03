var mongoose = require("mongoose");
var url = 'mongodb://localhost/mydatabase'
mongoose.connect(url);
// success
mongoose.connection.on("connected",function(){
	console.log("connected to "+url)
})
// error
mongoose.connection.on("error",function(err){
	console.log("connect to "+url+ " failed:")
	console.log(err);
})
// disconnected
mongoose.connection.on("disconnected",function(){
	console.log("*************disconnected**************");
})
module.exports = mongoose;
