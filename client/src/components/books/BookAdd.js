import React, { useState } from "react"; 
import { post } from 'axios'; 

function BookAdd(props) {
  const initialState = { title: '', content: '', tag: '' }
  const [book, setBook] = useState(initialState) 

  function handleChange(event) { 
    setBook({...book, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) { 
    event.preventDefault();     
    if(!book.title || !book.content || !book.tag) return 
    async function postBook() {
      try {
        const response = await post('/api/books', book); 
        props.history.push(`/books/${response.data._id}`);  
      } catch(error) {
        console.log('error', error);
      }
    }
    postBook();
  }

  function handleCancel() {
    props.history.push("/books");
  }

  return ( 
    <div>
      <h1>Create Article</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input name="title" type="text" value={book.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="content" rows="5" value={book.content} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Tag</label>
          <textarea name="tag" rows="5" value={book.tag} onChange={handleChange} className="form-control" />
        </div>

        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default BookAdd;