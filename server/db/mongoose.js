const mongoose = require('mongoose');
process.env.MONGODB_URI = 'mongodb://parulekar.j:Americanme94@ds241737.mlab.com:41737/todos';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
module.exports = {
    mongoose
}