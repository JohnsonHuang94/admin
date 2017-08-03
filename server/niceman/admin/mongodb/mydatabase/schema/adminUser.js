var mongoose = require("../db.js");
var Schema = mongoose.Schema;

var AdminUser = new Schema({
	username: String,
	userpwd: String,
	userphone: String,
	userage: Number,
	logintime: Date
})

module.exports = mongoose.model("adminUser", AdminUser);