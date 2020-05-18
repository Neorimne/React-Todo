import { getUsersData } from "../api/api";

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


export default usersReducer;
