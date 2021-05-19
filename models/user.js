
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  pass:{
    type: String,
    required: [true, "Pass is required"]
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema); 