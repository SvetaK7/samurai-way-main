import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    console.log(props.login)
    return (
        <header className = {s.header}>
            <img src="https://heilpraktiker-erftstadt.de/wp-content/uploads/2013/03/logo-1446293_1920-300x236.png" />
            <div className={s.loginBlock}>

                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}

export default Header;