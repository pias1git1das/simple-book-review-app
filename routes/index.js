const express = require ('express'); 
const router = express.Router(); 
const Book = require('../models/book');
const review = require('../models/review');
const Review= require('../models/review'); 
const User= require('../models/user'); 

/// return all books
router.get('/books', function(req, res) { 
  Book.find(function(err, books) {
    res.json(books);
  });
});

/// show review to a user
router.get('/users/reviews/', function(req, res){    
  Review.find(function(err,reviews){
      res.json(reviews);
  });
});

/// find book by book id
router.get('/books/:id', function(req, res) {  
  Book.findById(req.params.id, function(err, book) {
    if (!book) {
      res.status(404).send('No result found');
    } else {
      res.json(book);
    }
  });
});

/// fetch a particular book review
router.get('/books/reviews/:id', function(req, res) {  
  Review.find({"bookId": req.params.id}, function (error, review) {
    res.json(review);    
  });
});

/// adding books
router.post('/books', function(req, res) { 
  let book = new Book(req.body);
  book.save()
    .then(book => {
      res.send(book);
    })
    .catch(function(err) {
      res.status(422).send('Book add failed');
    });
});

/// searching books by title
router.get('/searchbook/:id', function(req, res) { 
  //console.log("api called:"+req.params.id);
  Book.find({"title": req.params.id}, function (error, book) {
    res.json(book);    
   // console.log(book);
  });
});

/// creating user
router.post('/users', function(req, res) { 
  let user = new User(req.body);
  user.save()
    .then(u => {
     // console.log(u);
      res.send(u);
    })
    .catch(function(err) {
      res.status(422).send('User add failed');
    });
});


/// adding review
router.post('/books/addReview/', function(req, res){    
  let bookReview = new Review(req.body);
  bookReview.save()
    .then(review => {
      res.send(review);
    })
    .catch(function(err) {
      res.status(422).send('Review add failed');
    });
});

router.patch('/books/:id', function(req, res){    
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      res.json('Book updated');
    })
    .catch(function(err) {
      res.status(422).send("Book update failed.");
    });
});


module.exports = router;   