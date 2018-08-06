const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// Users.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove

Todo.findByIdAndRemove('5b6889bbfb6fc051fcbf49a6').then((todo) => {
    console.log(todo);
});