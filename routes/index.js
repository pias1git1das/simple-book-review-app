const express = require ('express'); 
const router = express.Router(); 
const Book = require('../models/book'); 

router.get('/books', function(req, res) { 
  Book.find(function(err, books) {
    res.json(books);
  });
});

router.get('/books/:id', function(req, res) {  
  Book.findById(req.params.id, function(err, book) {
    if (!book) {
      res.status(404).send('No result found');
    } else {
      res.json(book);
    }
  });
});

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

router.patch('/books/:id', function(req, res){    
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      res.json('Book updated');
    })
    .catch(function(err) {
      res.status(422).send("Book update failed.");
    });
});

router.delete('/books/:id', function(req, res) {  
  Book.findById(req.params.id, function(err, book) {
    if (!book) {
      res.status(404).send('Book not found');
    } else {
      Book.findByIdAndRemove(req.params.id)
        .then(function() { res.status(200).json("Book deleted") })
        .catch(function(err) {
          res.status(400).send("Book delete failed.");
        })
    }
  });

module.exports = router;   