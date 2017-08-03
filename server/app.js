// 引入api
// const api = require('./api');
// 引入文件处理模块
const fs = require('fs');
// 引入路径处理模块
const path = require('path');
// 引入数据处理模块
const bodyParser = require('body-parser');
// 引入Express(服务器相关模块)
const express = require('express');
const app = express();

// 用户认证模块passport
const passport = require('passport');
// token验证模块
const Strategy = require('passport-http-bearer').Strategy;
// 引入路有中间件
const routes = require('./niceman/routes');


app.use(passport.initialize());// 初始化passport模块
app.use(bodyParser.json()); // 调用bodyParser模块以便程序正确解析body传入值

routes(app)

app.listen(8088,function(){
	console.log('success listen')
});
