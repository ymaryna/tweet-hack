const mongoose = require('mongoose');
const Tweet = require('../models/tweet.model');
const User = require('../models/user.model');

module.exports.index = (req, res, next) => {
  const criteria = req.query.search
    ? {
      body: new RegExp(req.query.search, "i")
    }
    : {}

  Tweet.find(criteria)
    .sort({ createdAt: -1 })
    .limit(100)
    .populate('user')
    .then(tweets => {
      res.render('tweets/index', { user: req.currentUser, tweets })
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
  const tweet = new Tweet({
    user: req.currentUser._id,
    body: req.body.body,
    image: req.body.image
  })
  
  tweet.save()
    .then(() => {
      res.redirect('/')
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('app/index', { tweet, error: error.errors })
      } else {
        next(error);
      }
    })
}

module.exports.profile = (req, res, next) => {
  User.findOne({ username: req.params.username })
    .populate('tweets')
    .then(user => {
      if (user) {
        user.tweets.forEach(t => t.user = user)
        res.render('tweets/index', { user, tweets: user.tweets })
      } else {
        req.session.genericError = 'user not found'
        res.redirect('/')
      }
    })
    .catch(next)
}