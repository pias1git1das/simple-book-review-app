import React, { useState } from "react"; 
import { post } from 'axios'; 

function Home(props) {
  const initialState = { name: '', pass: '', userObjectId:''}
  const [user, setUser] = useState(initialState) 

  function handleChange(event) { 
    setUser({...user, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) { 
    event.preventDefault();     
    if(!user.name || !user.pass) return 
    async function postUser() {
      try {
        const response = await post('/api/users', user); 
        props.history.push(`/reviews/show/${response.data._id}`);  
      } catch(error) {
        console.log('error', error);
      }
    }
    postUser();
  }

  return ( 
    <div>
      <h1>Create Dummy Profile</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" type="text" value={user.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <textarea name="pass" rows="5" value={user.pass} onChange={handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        
        </div>
      </form>

   
    </div>
  );
}

export default Home;