const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// Get the model that waas already defined in User.js
const User = mongoose.model('users');

// Tell Passport how to provide the client with data to identify the user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Tell Passport how to use the data we receive from the client to look up the user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// callbackURL is where Google is to direct the user to after user authorizes app
// The strategy will be internally associated with the name 'google'
// For deploying on Heroku, we need to trust it as a proxy, or provide a full
// callbackURL rather than a relative path. Otherwise, it will drop the https,
// and try to call the callback URL using http and get a mismatch error
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // On successful authentication, an access token and will be made available
      // to us. Use the profile's id to look up the user in the database
      // Call done() with the user instance when we have found or created the user
      // First argument to done function is for any error that may have occurred
      // Note: findOne returns null if not found
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();

      done(null, user);
    }
  )
);
