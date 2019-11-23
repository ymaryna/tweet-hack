require('../config/db.config')

const User = require('../models/user.model')
const Tweet = require('../models/tweet.model')
const faker = require('faker')

User.deleteMany({})
  .then(() => Tweet.deleteMany({}))
  .then(() => {
    for (let i = 0; i < 100; i++) {
      const user = new User({
        name: faker.name.findName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: '123123123',
        avatar: faker.image.avatar(),
        bio: faker.lorem.sentence(),
        validated: true,
        createdAt: faker.date.past()
      })

      user.save()
        .then(user => {
          console.log(user.username)

          for(let j = 0; j < 1000; j++) {
            const tweet = new Tweet({
              user: user._id,
              body: faker.lorem.paragraph(),
              image: faker.random.image()
            })

            tweet.save()
              .then()
              .catch(console.error)
          }
        })
        .catch(console.error)
    }
  })
