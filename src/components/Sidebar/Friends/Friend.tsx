import React from 'react';
import s from './Friend.module.css';
import {FriendType} from "../../../redux/state";


export const Friend = (props: FriendType) => {
    return (
        <div>
            <div className={s.item}>
                <img className = {s.ava} src={props.title}/>
                <div>{props.name}</div>
            </div>
        </div>
    )
}