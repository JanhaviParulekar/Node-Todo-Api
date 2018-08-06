const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// var id = '5b67cc09e55d6a182a39406100';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo: ', todo);
// });

Todo.findById(id).then((todoById) =>{
    if(!todoById){
        return console.log('Id not found');
    }
    console.log('Todo by id: ', todoById);
}).catch((e) => console.log(e));


var userId = '5b6882886ce383602882bc0e';

Users.findById(userId).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User: ', user);
}).catch((e) => console.log(e));