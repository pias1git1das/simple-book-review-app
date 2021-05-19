import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([])

  useEffect(function() {
    async function getBooks() {
      try {
        const response = await axios.get("/api/books");
        setBooks(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }        
    getBooks();
  }, []);

  return (
    <div>
      <h2>
        Books
        <Link to="/books/new" className="btn btn-primary float-right">Create Book</Link> 
      </h2>
      <hr/>
      {books.map((book) => {
        return(
          <div key={book._id}>
            <h4><Link to={`/books/${book._id}`}>{book.title}</Link></h4>
            <small>_id: {book._id}</small>
            <hr/>
          </div>
        )     
      })}
    </div>
  )
}

export default BookList;