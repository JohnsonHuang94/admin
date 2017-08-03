var adminuser = require('./action/adminUser.js');

adminuser.addUser({
	username: 'smi',
	userpwd: '111111',
	userphone: '13610219462',
	userage: '12',
	logintime: +new Date()
})