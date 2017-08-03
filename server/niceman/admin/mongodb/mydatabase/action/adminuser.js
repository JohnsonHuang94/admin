var adminUser = require("../schema/adminUser.js");

// 添加
exports.addUser = function(obj){
	var username = obj.username||'',
		userpwd = obj.userpwd||'',
		userphone = obj.userphone||'',
		userage = obj.userage||0,
		logintime = obj.logintime||0;
	var adminuser = new adminUser({
		username: username,
		userpwd: userpwd,
		userphone: userphone,
		userage: userage,
		logintime: logintime
	})
	adminuser.save(function(err){
		if (err) {throw err}
		console.log(username + "has been saved")
	})
}
// addUser({
// 	username: 'kobe',
// 	userpwd: '123456',
// 	userphone: '13610219462',
// 	userage: 24
// })
// 修改
// function updateItem(name, data){
// 	if (name === 'username') {

// 	}
// }
// function updateUser(obj){
// 	var type = obj.type;
// 	if (!type) {
// 		throw Error("type is required");
// 		return
// 	}
// 	var username = obj.change.username,
// 		userpwd = obj.change.userpwd,
// 		userphone = obj.change.userphone,
// 		userage = obj.change.userage,
// 		logintime = obj.change.logintime;

// }

