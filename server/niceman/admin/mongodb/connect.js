var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID
var server = new mongodb.Server('127.0.0.1', 27017, {});

var client = new mongodb.Db('mydatabase', server, {w: 1});
// console.log(ObjectID)
var _id = ObjectID('5971efaf733c9849afb42b54');
// console.log(_id)
client.open(function(err){
	if (err) throw err;
	client.collection('test_insert', function(err, collection){
		if (err) throw err;
		// console.log(collection);
		// 插入
		// collection.insert(
		// 	{
		// 		"title": "name",
		// 		"body": "johnson"
		// 	},
		// 	{
		// 		"save": true
		// 	},
		// 	function(err, documents){
		// 		if (err) throw err;

		// 		console.log('-------------')
		// 		console.log(documents)
		// 	}
		// )
		// 更新
		// collection.update(
		// 	{_id: _id},
		// 	{$set: {"title": 'faaaaaaaauk'}},
		// 	{safe: true},
		// 	function(err){
		// 		if (err) {throw err}
		// 	}
		// )
		// 删除
		// collection.remove(
		// 	{
		// 		_id: _id
		// 	},
		// 	{safe: true},
		// 	function(err){
		// 		if (err) {throw err}
		// 	}
		// )
		// 查找
		collection.find({
			"title": "name"
		}).toArray(function(err, results){
			if (err) {throw err}
			console.log(results)
		})
	})
})