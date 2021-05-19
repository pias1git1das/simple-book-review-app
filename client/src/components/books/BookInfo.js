import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function BookInfo(props) {
  const [book, setBook] = useState({}); 
  const [reviews, setReviews] = useState([])

  useEffect(function() { 
    async function getBookDetails() {
      try {
        let bookId=props.match.params._id;
        const response = await axios.get(`/api/books/${bookId}`); 
        setBook(response.data);
        const response2 = await axios.get(`/api/books/reviews/${bookId}`); 
        //console.log("reponse2:"+response2.data);
        setReviews(response2.data);
      } catch(error) {
        console.log('error', error);
      }
    }
    getBookDetails();    
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
      <br/>
      <br/>
      <br/>

      <div className="btn-group">
        <Link to={`/reviews/${book._id}/review`} className="btn btn-primary">Add Review For This Book</Link> 
      </div>
      <br/>

      {reviews.map((review) => {
        return(
          <div key={review._id}>
            <small>_id: {review._id}</small>
            <h4>{review.review}</h4>
            <hr/>
          </div>
        )     
      })}
      <hr/>
    </div>
  );
};

export default BookInfo;