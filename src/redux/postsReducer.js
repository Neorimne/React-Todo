const SET_POSTS = 'SET_POSTS';

let initState = {
    posts: []
};

const postsReducer = (state = initState, action) => {
    switch(action.type){
        case SET_POSTS:{
            return{
                ...state,
                posts: action.posts
            }
        };
        default:
            return state
    }
};

export const setPosts = (posts) => ({type: SET_POSTS, posts})

export default postsReducer;
