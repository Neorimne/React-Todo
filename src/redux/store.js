import {combineReducers, createStore, applyMiddleware} from 'redux';
import todoReducer from './todoReducer';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    todos: todoReducer,
    users: usersReducer,
    posts: postsReducer
});



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;