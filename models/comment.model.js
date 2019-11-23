const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  // TODO
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
