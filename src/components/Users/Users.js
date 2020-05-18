import React from 'react';
import style from './users.module.css';
import {useEffect, useState } from "react";
import Preloader from '../common/Preloader';

const Users = (props) => {
    
    const [isFetching, setIsFetching] = useState(false);
    
    useEffect (() => {
        setIsFetching(true);
        props.getUsers();            
        setIsFetching(false);
    }, []);
    let usersItems = props.users.map(element => 
        <div key={element.id} className={style.userContainer}>
            <div className={style.userImage}>
                <img src ={element.avatar} alt ="user ava" />
            </div>
            <div className={style.userInfo}>
                <h2>{element.first_name}</h2>
                <h2>{element.last_name}</h2>
                <div>{element.email}</div>
                <div>{element.website}</div>
            </div>
        </div>)
    
    return (
        <div className={style.usersWrapper}>
                {isFetching ? <Preloader /> :  usersItems}
        </div>
         
    )
}

export default Users;