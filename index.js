const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// Heroku and other service providers may specify the port
const PORT = process.env.PORT || 5000;

app.listen(PORT);
