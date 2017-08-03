var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydatabase");
var Schema = mongoose.Schema;
var Tasks = new Schema({
	title: String,
	body: String
})
mongoose.model('Task', Tasks );
var Task = mongoose.model('Task');
var task = new Task();
task.title = "what's the fuck!";
task.body = "yooooooooooooooooo";
// task.save(function(err){
// 	if (err) {throw err}
// 	console.log("task saved");
// })

console.log(Task)


// var Test_insert = new Schema({
// 	collection: 'test_insert'
// })
// mongoose.model('test_insert', Test_insert);
// // console.log(test_insert)

// test_insert.find({'title':'name'},function(err, tasks){
// 	console.log(tasks.length)
// 	for(var i = 0; i < tasks.length; i++){
// 		console.lg(tasks[i])
// 	}
// })
