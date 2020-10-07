import todoReducer from './todoReducer';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contactReducer';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer:{
        todos: todoReducer,
        users: usersReducer,
        posts: postsReducer,
        contactMessages: contactReducer,
        form: formReducer
    }
})