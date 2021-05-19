import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function ReviewShow() {
  const [reviews, setReviews] = useState([])

  useEffect(function() {
    async function getReviews() {
      try {
        const response = await axios.get("/api/users/reviews");
        setReviews(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }        
    getReviews();
  }, []);

  return (
    <div>
      <h2>
        Reviews
      </h2>
      <hr/>
      {reviews.map((review) => {
        return(
          <div key={review._id}>
            <small>_id: {review._id}</small>
            <h4> {review.review}</h4>
            <h4><Link to={`/books/${review.bookId}`}>BookInfo</Link></h4>
            <h4> By user: {review.name}</h4>
            <hr/>
          </div>
        )     
      })}
    </div>
  )
}

export default ReviewShow;