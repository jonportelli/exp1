var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username: String
});


mongoose.model('users', usersSchema);

module.exports = mongoose.model('users', postSchema);
