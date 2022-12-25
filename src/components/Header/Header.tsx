import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Header = (props: any) => {
    console.log(props.login)

    return (
        <header className = {s.header}>
            <img src="https://heilpraktiker-erftstadt.de/wp-content/uploads/2013/03/logo-1446293_1920-300x236.png" />
            <div className={s.loginBlock}>

                {props.isAuth
                    ? <div>{props.login}  - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/Login'}>Login</NavLink>
                }


            </div>
        </header>
    );
}

export default Header;