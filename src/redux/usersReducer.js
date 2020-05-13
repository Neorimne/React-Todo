import { getUsersData, getUserImagesData } from "../api/api";

const SET_USERS_IMAGES = 'SET_USERS_IMAGES';
const SET_USERS_DATA = 'SET_USERS_DATA';

let initState = {
    usersData: [],
    usersImages: []
};

const usersReducer = (state = initState, action) => {
    console.log("usersReducer: ", action)
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                usersData: [...action.usersData]
            };
        case SET_USERS_IMAGES:
            return {
                ...state,
                usersImages: [...action.usersImages]
            };
        default: {
            return state;
        }
    };
};

export const setUsersData = (usersData) => ({ type: SET_USERS_DATA, usersData });
export const setUsersImages = (usersImages) => ({type:SET_USERS_IMAGES, usersImages});

export const getUsers = () => {
   return async (dispatch) => {
       let data = await getUsersData();
        dispatch(setUsersData(data));
    }
}

export const getUserImages = () => {
    return async (dispatch) => {
        let data = await getUserImagesData();
        dispatch(setUsersImages(data));
    }
}

export default usersReducer;
