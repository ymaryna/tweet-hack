const mongoose = require('mongoose');
require('./comment.model')

const tweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  body: {
    type: String,
    required: true
  },
  hashtags: {
    type: [String]
  },
  image: {
    type: String
  }
}, { timestamps: true })

tweetSchema.pre('save', function (next) {
  next()
});

tweetSchema.virtual('comments', {
  ref: 'Comment',
  localField: 'tweet',
  foreignField: '_id',
  justOne: false,
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
