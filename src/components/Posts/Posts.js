
import style from './posts.module.css';
import axios from 'axios';
import React, { useEffect } from 'react';

const Posts = (props) => {
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
            props.setPosts(response.data)
        };
        fetchData();
    }, [])

    let postItems = props.posts.posts.map(element => <div key={element.id} className={style.postItem}>
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
            {postItems}
        </div>
    )
}

export default Posts;