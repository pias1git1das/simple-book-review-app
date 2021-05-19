import React, { useState } from "react"; 
import { post } from 'axios'; 

function ReviewAdd(props) {
  const initialState = { review: '', bookId: props.match.params._id, name:' '}
  const [reviewObject, setReview] = useState(initialState) 

  function handleChange(event) { 
    setReview({...reviewObject, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) { 
    event.preventDefault();     
    if(!reviewObject.review) return 
    async function postReview() {
      try {
        reviewObject.name='test'; /// get the name from global context
        await post('/api/books/addReview', reviewObject); 
        props.history.push(`/books/${reviewObject.bookId}`);  
      } catch(error) {
        console.log('error', error);
      }
    }
    postReview();
  }

  function handleCancel() {
    props.history.push("/books");
  }

  return ( 
    <div>
      <h1>Add Review</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Review</label>
          <input name="review" type="text" value={reviewObject.review} onChange={handleChange} className="form-control" />
        </div>
      
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewAdd;