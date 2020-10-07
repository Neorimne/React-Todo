/* import { getUsersData } from "../api/api";

const SET_USERS_DATA = 'SET_USERS_DATA';
let initState = {
    usersData: [],
};
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                usersData: [...action.usersData]
            };
        default: {
            return state;
        }
    };
};
export const setUsersData = (usersData) => ({ type: SET_USERS_DATA, usersData });
export const getUsers = () => {
   return async (dispatch) => {
       let data = await getUsersData();
       dispatch(setUsersData(data.data));
    }
}
export default usersReducer; */
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
