import React from 'react';
import {Friends} from "./Friends/Friends";
import s from './Sidebar.module.css';
import {TSydebar} from "../../redux/state";


export const Sidebar = (props: TSydebar) => {
    return (
        <div className={s.sidebar}>
            <Friends sidebar={props.sidebar}/>
        </div>
    )
}