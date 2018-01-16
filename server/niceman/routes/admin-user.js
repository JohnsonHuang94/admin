const express = require('express');
const adminUser = require('../admin/mongodb/adminUser/schema/adminUser.js');
const config = require('../../common/config.js');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = express.Router();

require('../admin/mongodb/adminUser/passport')(passport);
// 注册
router.post('/signup',function(req,res){
	let account = req.query.account;
	let pwd = req.query.password;

	if (!account||!pwd) {
		res.json({code: 1, msg: '用户名或密码不能为空'})
	}else{
		var newUser = new adminUser({
			userName: account,
			userPwd: pwd
		})
		newUser.save((err) => {
			if (err) {
				res.json({code: 2,msg: "注册失败"})
			}else{
				res.json({code: 0, msg: null})
			}
		})
	}
})


router.post('/login',function(req,res){
	let account = req.query.account;
	let pwd = req.query.password;
	if (!account||!pwd) {
		res.json({code: 1, msg: '用户名或密码不能为空'})
	}else{
		adminUser.findOne({userName: account}, {userPwd: 1}, function(err, doc){
			if (err) {
				throw err;
			}
			if (doc.length==0) {
				res.json({code: 2, msg: "user doesn't exist"})
			}else{
				var user = doc[0]
				adminUser.comparePassword(pwd, function(err, isMatch){
					if (isMatch&&!err) {
						var token = jwt.sign({userName: user.userName}, config.secret, {expiresIn: 10080});
						adminUser.token = token;
						adminUser.save(function(err){
							if(err){
								res.send(err);
							}
						})
						res.json({
							code: 0,
							msg: null
						})
					}else{
						res.json({
							code: 3,
							msg: '用户名或密码错误'
						})
					}
				})
			}
		})
	}
	
})

router.get('/info',function(req,res){
	res.send('aaa')
})

module.exports = router;
