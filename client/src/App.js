import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import BookList from './components/books/BookList';
import BookInfo from './components/books/BookInfo';
import BookAdd from './components/books/BookAdd';
import BookEdit from './components/books/BookEdit';
import ReviewAdd from './components/reviews/ReviewAdd';
import ReviewShow from './components/reviews/ReviewShow';
import SearchBook from './components/books/SearchBook';

function App() {
  return (
    <div className="App">     
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/books">Books</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/books/search">Search</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={BookList} />
      <Route exact path="/books/new" component={BookAdd} />
      <Route exact path="/books/search" component={SearchBook} />
      <Route exact path="/books/:_id" component={BookInfo} />
      <Route exact path="/books/:_id/edit" component={BookEdit} />
      <Route exact path="/reviews/:_id/review" component={ReviewAdd} />
      <Route exact path="/reviews/show/:id" component={ReviewShow} />
     
    </Switch>
  );
}

export default App;
