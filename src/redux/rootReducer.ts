import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";
import { reducer as formReducer } from "redux-form";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  users: usersReducer,
  posts: postsReducer,
  contactMessages: contactReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
