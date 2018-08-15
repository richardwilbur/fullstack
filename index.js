const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Configure cookie-session ans passport as middleware
// Specify cookie life in milliseconds (ie: 30 days)
// keys is used to encrypt cookie values. Array supports randomly picking a key
app.use(
  cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Heroku and other service providers may specify the port
const PORT = process.env.PORT || 5000;

app.listen(PORT);
