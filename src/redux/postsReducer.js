
import { getPostsData } from "../api/api";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    postsArr: [],
    status: 'idle',
    error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await getPostsData();
    return response;
});


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending] : (state, action) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled] : (state, action) => {
            state.status = 'succeeded';
            state.postsArr = state.postsArr.concat(action.payload);
        },
        [fetchPosts.rejected] : (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export const selectAllPosts = (state) => state.posts.postsArr;

export default postsSlice.reducer;
