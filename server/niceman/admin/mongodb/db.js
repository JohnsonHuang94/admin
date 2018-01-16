var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydatabase",{useMongoClient:true});
var Schema = mongoose.Schema;

