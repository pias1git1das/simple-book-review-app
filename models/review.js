
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({ 
  review: {
    type: String,
    required: [true, "Review is required"]
  },
  date: { type: Date, default: Date.now },
  name: { type: String,required: [true, "Name is required"]},
  bookId:{ ref: 'bookSchema', type: mongoose.Schema.ObjectId },
  userId:{ ref: 'userSchema', type: mongoose.Schema.ObjectId }
});

module.exports = mongoose.model('Review', reviewSchema); 