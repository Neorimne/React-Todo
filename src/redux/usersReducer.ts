import { getUsersData } from "../api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

interface IUsersState {
  usersArr: Array<IUser>;
  status: string;
  error: string | undefined;
}

const initialState: IUsersState = {
  usersArr: [],
  status: "idle",
  error: undefined,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getUsersData();
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.usersArr = state.usersArr.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllUsers = (state: RootState) => state.users.usersArr;

export default usersSlice.reducer;
