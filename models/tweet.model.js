const mongoose = require('mongoose');
require('./comment.model')

const tweetSchema = new mongoose.Schema({
  // TODO
}, { timestamps: true })

tweetSchema.pre('save', function (next) {
  next()
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
