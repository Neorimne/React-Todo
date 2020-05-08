import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = (props) => {
    return (
        <div className={style.navWrapper}>
            <div className={style.nav}>
                <NavLink className={style.navItems} to="/">TODOS</NavLink>
                <NavLink className={style.navItems} to="/users">USERS</NavLink>
                <NavLink className={style.navItems} to="/posts">POSTS</NavLink>
                <NavLink className={style.navItems} to="/contacts">CONTACTS</NavLink>
            </div>
        </div>
    )
}

export default Header;