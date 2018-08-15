const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// Creates the collection if it doesn't already exist
// Passing the schema defines the model
mongoose.model('users', userSchema);
