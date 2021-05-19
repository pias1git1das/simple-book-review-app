import React, { useState, useEffect } from "react";
import { get, patch } from 'axios';

function BookEdit(props) {
  const initialState = { title: '', content: '' }
  const [book, setBook] = useState(initialState)

  useEffect(function() {
    async function getBook() {
      try {
        const response = await get(`/api/books/${props.match.params._id}`);
        setBook(response.data);        
      } catch(error) {
        console.log(error);
      }
    }
    getBook();    
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();
    async function updateBook() {
      try {
        await patch(`/api/books/${book._id}`, book);
        props.history.push(`/books/${book._id}`);        
      } catch(error) {
        console.log(error);
      }
    }
    updateBook();
  }

  function handleChange(event) {
    setBook({...book, [event.target.name]: event.target.value})
  }

  function handleCancel() {
    props.history.push(`/books/${book._id}`);
  }

  return (
    <div>
      <h1>Edit {book.title}</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" rows="5" value={book.content} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Tag</label>
          <textarea name="tag" rows="5" value={book.tag} onChange={handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default BookEdit;