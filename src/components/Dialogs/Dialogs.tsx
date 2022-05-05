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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={"Sveta"} id={dialogsData[1].id}/>
                <DialogItem name={"Artem"} id={dialogsData[2].id}/>
                <DialogItem name={"Egor"} id={dialogsData[3].id}/>
                <DialogItem name={"Victor"} id={dialogsData[4].id}/>
                <DialogItem name={"Valera"} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={"Hey"}/>
                <Message message={"I am happy"}/>
                <Message message={"You are welcome"}/>
                <Message message={"I am cooking pizza today"}/>
            </div>
        </div>
    )
}

export default Dialogs;