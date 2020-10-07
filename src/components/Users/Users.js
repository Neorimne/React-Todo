import React from 'react';
import style from './users.module.css';
import {useEffect, useState } from "react";
import Preloader from '../common/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers } from '../../redux/usersReducer';

const Users = () => {
    
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const usersStatus = useSelector(state => state.users.status);

    const [isFetching, setIsFetching] = useState(false);
    
    useEffect (() => {
        if(usersStatus === 'idle') {
            setIsFetching(true);
            dispatch(fetchUsers());            
        }
    }, [usersStatus, dispatch]);

    useEffect(() => {
        if (usersStatus === 'succeeded') setIsFetching(false);
    }, [usersStatus]);

    const usersItems = users.map(element => 
        <div key={element.id} className={style.userContainer}>
            <div className={style.userImage}>
                <img src ={element.avatar} alt ="user ava" />
            </div>
            <div className={style.userInfo}>
                <h2>{element.first_name}</h2>
                <h2>{element.last_name}</h2>
                <div className={style.userEmail}>{element.email}</div>
            </div>
        </div>)
    
    return (
        <div className={style.usersWrapper}>
                {isFetching ? <Preloader /> :  usersItems}
        </div>
         
    )
}

export default Users;