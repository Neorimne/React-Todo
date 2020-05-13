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
    useEffect (() => {
            setIsFetching(true);
            props.getUserImages()
            setIsFetching(false);
    }, []);
    console.log("props: ", props.users)
    let usersItems = props.users.map(element => 
        <div key={element.id} className={style.userContainer}>
            <div className={style.userImage}>
                <img src ={props.usersImages[element.id]} alt ="user ava" />
            </div>
            <div className={style.userInfo}>
                <h3>{element.name}</h3>
                <div>{element.email}</div>
                <div>{element.website}</div>
            </div>
        </div>)
    
    return (
        <div className={style.usersWrapper}>
                {isFetching ? <Preloader /> : usersItems}
        </div>
         
    )
}

export default Users;