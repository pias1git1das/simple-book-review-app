import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function BookInfo(props) {
  const [book, setBook] = useState({}); 

  useEffect(function() { 
    async function getBook() {
      try {
        const response = await axios.get(`/api/books/${props.match.params._id}`); 
        setBook(response.data);      
      } catch(error) {
        console.log('error', error);
      }
    }
    getBook();    
  }, [props]); 

  async function handleDelete() { 
    try {
      await axios.delete(`/api/books/${props.match.params._id}`); 
      props.history.push("/books"); 
    } catch(error) {
      console.error(error);
    }
  }

  return ( 
    <div>
      <h2>{book.title}</h2>
      <small>_id: {book._id}</small>
      <p>{book.content}</p>
      <p>{book.tag} </p>
      <div className="btn-group">
        <Link to={`/books/${book._id}/edit`} className="btn btn-primary">Edit</Link> 
        <button onClick={handleDelete} className="btn btn-danger">Delete</button> 
        <Link to="/books" className="btn btn-secondary">Close</Link>
      </div>
      <hr/>
    </div>
  );
};

export default BookInfo;