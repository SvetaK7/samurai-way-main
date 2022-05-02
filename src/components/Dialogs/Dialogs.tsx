import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string;
    id: string;
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Dima"} id={"1"}/>
                <DialogItem name={"Sveta"} id={"2"}/>
                <DialogItem name={"Artem"} id={"3"}/>
                <DialogItem name={"Egor"} id={"4"}/>
                <DialogItem name={"Victor"} id={"5"}/>
                <DialogItem name={"Valera"} id={"6"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hello"}/>
                <Message message={"How are you?"}/>
                <Message message={"Hey"}/>
            </div>
        </div>
    )
}

export default Dialogs;