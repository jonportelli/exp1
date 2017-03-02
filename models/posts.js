var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
  content: String
});


mongoose.model('posts', postsSchema);

module.exports = mongoose.model('posts', postSchema);
