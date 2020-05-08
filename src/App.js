import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import TodosContainer from './components/Todos/TodosContainer';
import store from './redux/store';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import PostsContainer from './components/Posts/PostsContainer';
import Contacts from './components/Contacts/Contacts';


const App = () => {
  return (
     <Router>
      <div className="appWrapper">
        <Header />
        <Route exact path={process.env.PUBLIC_URL + '/'}
          render = {() => <TodosContainer store = {store} />} />
        <Route path="/users"
          render ={() => <UsersContainer store={store} />} />
        <Route path="/posts"
          render = {() => <PostsContainer store={store} />} />
        <Route path="/contacts"
          render = {() => <Contacts />} />
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
