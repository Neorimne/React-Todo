import {connect } from 'react-redux';
import Posts from './Posts';
import { getPosts } from '../../redux/postsReducer';

let mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
};

const PostsContainer = connect(mapStateToProps, {getPosts})(Posts);

export default PostsContainer;