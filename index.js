const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'now' });
});

// Heroku and other service providers may specify the port
const PORT = process.env.PORT || 5000;

app.listen(PORT);
