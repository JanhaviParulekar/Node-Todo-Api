const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://parulekar.j:Americanme94@ds241737.mlab.com:41737/todos' || 'mongodb://localhost:27017/TodoApp');

 mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}