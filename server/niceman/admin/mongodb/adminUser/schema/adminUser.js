var mongoose = require("../db.js");
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

var AdminUser = new Schema({
	userName: {
		type: String,
		uniqui: true,
		require: true
	},
	userPwd: {
		type: String,
		require: true
	},
	token: {
	    type: String
	},
	// salt: String,
	addTime: {
		type: Date,
	},
	loginTime: {
		type: Date,
	}
})
// 添加用户保存时中间件对password进行bcrypt加密,这样保证用户密码只有用户本人知道
AdminUser.pre('save', function (next) {
    var user = this;
    if (this.isModified('userPwd') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.userPwd, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.userPwd = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

// 校验用户输入密码是否正确
AdminUser.methods.comparePassword = function(pwd, cb) {
    bcrypt.compare(pwd, this.userPwd, function(err, isMatch){
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model("adminUser", AdminUser);