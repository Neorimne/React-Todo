import style from './posts.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../../redux/postsReducer';

const Posts = () => {
    
    const postsStatus = useSelector(state => state.posts.status);
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch]);

    let postItems = posts.map(element => <div key={element.id} className={style.postItem}>
        <h2>{element.title}</h2>
        <p>{element.body}</p>
        <p>There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
           If you are going to use a passage of Lorem Ipsum,
            you need to be sure there isn't anything embarrassing hidden
             in the middle of text. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as necessary, making this
               the first true generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence structures,
                 to generate Lorem Ipsum which looks reasonable. The generated Lorem
                  Ipsum is therefore always free from repetition,
                   injected humour, or non-characteristic words etc.</p>
    </div>)

    return (
        <div className={style.postsWrapper}>
            {postItems ? postItems : <p>fok u</p>}
        </div>
    )
}

export default Posts;