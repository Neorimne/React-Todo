
import { getUsersData } from "../api/api";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    usersArr: [],
    status: 'idle',
    error: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () =>{
    const response = await getUsersData();
    return response.data;
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.usersArr = state.usersArr.concat(action.payload);
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export const selectAllUsers = (state) => state.users.usersArr;

export default usersSlice.reducer;
