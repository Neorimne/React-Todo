import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  Route,
  HashRouter,
} from 'react-router-dom';
import TodosContainer from './components/Todos/TodosContainer';
import store from './redux/store';
import Footer from './components/Footer/Footer';

const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const PostsContainer = lazy(() => import('./components/Posts/PostsContainer'));
const Contacts = lazy(() => import('./components/Contacts/Contacts'));



const App = () => {
  return (
     <HashRouter basename="/">
      <div className="appWrapper">
        <Header />
        <Route exact path="/"
            render={() => <TodosContainer store = {store} />} />
          <Suspense fallback={<div>Loading...</div>}>
                <Route path="/users" 
                      render={() => <UsersContainer store = {store} />} />
                <Route path="/posts"
                      render={() => <PostsContainer store = {store} />} />
                <Route path="/contacts"
                      render={() => <Contacts />} />
          </Suspense>
        <Footer />
      </div>
    </HashRouter> 
  );
}

export default App;