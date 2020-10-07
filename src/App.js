import React, { Suspense, lazy} from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  Route,
  HashRouter,
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Preloader from './components/common/Preloader';
import Todos from './components/Todos/Todos';
//import Users from './components/Users/Users';
//import Posts from './components/Posts/Posts';
//import Contacts from './components/Contacts/Contacts';

const Users = lazy(()=> import('./components/Users/Users'));
const Posts = lazy(()=> import('./components/Posts/Posts'));
const Contacts = lazy(()=> import('./components/Contacts/Contacts'));


const App = () => {
  
  return (
     <HashRouter basename="/">
      <div className="appWrapper">
        <Header />
        <Route exact path="/"
            render={() => <Todos />} />
          <Suspense fallback={<Preloader />}>
                <Route path="/users" 
                      render={() => <Users  />} />
                <Route path="/posts"
                      render={() => <Posts  />} />
                <Route path="/contacts"
                      render={() => <Contacts  />} />
          </Suspense>
        <Footer />
      </div>
    </HashRouter> 
  );
}

export default App;
