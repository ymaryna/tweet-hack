require('../config/db.config')

const User = require('../models/user.model')
const Tweet = require('../models/tweet.model')
const faker = require('faker')

User.deleteMany({})
  .then(() => Tweet.deleteMany({}))
  .then(() => {
    // TODO!
  })
