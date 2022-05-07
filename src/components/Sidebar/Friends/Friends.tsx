import React from 'react';
import {Friend} from "./Friend";
import {TSydebar} from "../../../redux/state";
import s from './Friends.module.css';

export const Friends = (props: TSydebar) => {
    let friendElements = props.sidebar.friends.map( p => <Friend title={p.title} name={p.name}/>)
    return (
        <div>
            <h2>Friends</h2>
            <div className={s.avaName}>
                {friendElements}
            </div>
        </div>
    )
}