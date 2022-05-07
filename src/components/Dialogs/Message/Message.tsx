import React from 'react';
import s from './../Dialogs.module.css';
import {MessagePropsType} from "../../../redux/state";


const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;