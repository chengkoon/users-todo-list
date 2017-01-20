var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');
var User = require('../models/user');

const TodoSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  completed: { type: Boolean, default: false}
})


module.exports = mongoose.model('Todo', TodoSchema);
