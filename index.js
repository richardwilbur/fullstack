const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// callbackURL is where Google is to direct the user to after user authorizes app
// The strategy will be internally associated with the name 'google'
// On successful authentication, an access token will be made available to us
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken:', accessToken);
      console.log('refreshToken:', refreshToken);
      console.log('profile:', profile);
    }
  )
);

// Ask Google for access to the user's profile and email address. There are other
// things we could ask for as well
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// When the user comes back, passport will take the code parameter that is in
// the callback URL and make a call back to Google for the user's info
app.get('/auth/google/callback', passport.authenticate('google'));

// Heroku and other service providers may specify the port
const PORT = process.env.PORT || 5000;

app.listen(PORT);
