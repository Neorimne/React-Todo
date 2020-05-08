import {connect } from 'react-redux';
import Posts from './Posts';
import { setPosts } from '../../redux/postsReducer';

let mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
};

const PostsContainer = connect(mapStateToProps, {setPosts})(Posts);

export default PostsContainer;