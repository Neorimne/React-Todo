import {combineReducers, createStore, applyMiddleware} from 'redux';
import todoReducer from './todoReducer';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contactReducer';



const reducers = combineReducers({
    todos: todoReducer,
    users: usersReducer,
    posts: postsReducer,
    contactMessages: contactReducer,
    form: formReducer
});



const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;