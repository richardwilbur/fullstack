// If we are deployed to Heroku, it will set NODE_ENV to production
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
