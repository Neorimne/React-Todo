import { getPostsData } from "../api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostsState {
  postsArr: Array<IPost>;
  status: string;
  error: string | undefined;
}

const initialState: IPostsState = {
  postsArr: [],
  status: "idle",
  error: undefined,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await getPostsData();
  return response;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.postsArr = state.postsArr.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllPosts = (state: RootState) => state.posts.postsArr;

export default postsSlice.reducer;
