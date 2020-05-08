import {combineReducers, createStore} from 'redux';
import todoReducer from './todoReducer';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';



let reducers = combineReducers({
    todos: todoReducer,
    users: usersReducer,
    posts: postsReducer
});



let store = createStore(reducers);

export default store;