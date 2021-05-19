
const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({ 
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content can't be blank"]
  },
  tag: {
    type: String,
    required: [true, "Tag is required"]
  }
});

module.exports = mongoose.model('Book', bookSchema); 