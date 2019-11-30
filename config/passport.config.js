const passport = require("passport");
const User = require("./models/user");

const SlackStrategy = require("passport-slack").Strategy;

passport.use(
  new SlackStrategy(
    {
      clientID: SLACK_CLIENT_ID,
      clientSecret: SLACK_CLIENT_SECRET,
      callbackURL: SLACK_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      // to see the structure of the data in received response:
      console.log("Slack account details:", profile);

      User.findOne({ slackID: profile.id })
        .then(user => {
          if (user) {
            done(null, user);
            return;
          }

          User.create({ slackID: profile.id })
            .then(newUser => {
              done(null, newUser);
            })
            .catch(err => done(err)); // closes User.create()
        })
        .catch(err => done(err)); // closes User.findOne()
    }
  )
);

module.exports = SlackStrategy;