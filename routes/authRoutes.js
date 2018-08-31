const passport = require('passport');

module.exports = app => {
  // Ask Google for access to the user's profile and email address. There are other
  // things we could ask for as well
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  // When the user comes back, passport will take the code parameter that is in
  // the callback URL and make a call back to Google for the user's info
  app.get('/auth/google/callback', passport.authenticate('google'));

  // Passport attaches a logout function to req. After logout, user is no longer
  // available, and returns null
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // Passport flow adds user to req
  // We can call this from the client to determine whether a user is logged in
  app.get('/api/current_user', (req, res) => {
    // res.send(req.session);
    res.send(req.user);
  });
};
