import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string;
    id: number;
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + " " + s.active}>
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

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey'},
        {id: 4, message: 'I am happy'},
        {id: 5, message: 'You are welcome'},
        {id: 6, message: 'I am cooking pizza today'}
    ]
    let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messagesData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;