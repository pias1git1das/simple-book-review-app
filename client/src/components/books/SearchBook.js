import React, { useState } from "react"; 
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function SearchBook(props) {
  const [books, setBooks] = useState([])
  const initialState = { title: ''}
  const [title,setTitle] =useState(initialState);

  function handleSubmit(event) { 
    event.preventDefault();     
    async function searchBook() {
      try {
        const response = await axios.get("/api/searchbook/"+title.title);
        setBooks(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }
    searchBook();
  }

  function handleChange(event){
    setTitle({...title, [event.target.name]: event.target.value})
  }

  function handleCancel() {
    props.history.push("/books");
  }

  return ( 
    <div>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Search Book</label>
          <input name="title" type="text" value={title.title} onChange={handleChange} className="form-control" />
        </div>
        

        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
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
     
  );
}

export default SearchBook;