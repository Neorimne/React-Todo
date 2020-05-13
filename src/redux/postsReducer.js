import { getPostsData } from "../api/api";

const SET_POSTS = 'SET_POSTS';

let initState = {
    posts: []
};

const postsReducer = (state = initState, action) => {
    switch(action.type){
        case SET_POSTS: 
            return {
                ...state,
                posts: action.posts
            };
        default:
            return state
    }
};

export const setPosts = (posts) => ({type: SET_POSTS, posts});

export const getPosts = () => {
    return async (dispatch) => {
        let data = await getPostsData();
        dispatch(setPosts(data));
    }
}

export default postsReducer;
