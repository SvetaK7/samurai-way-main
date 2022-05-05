import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagePropsType} from "./Message/Message";

type IDialogsAndMessage= {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessagePropsType>
}


const Dialogs = (props: IDialogsAndMessage) => {

    let dialogsElement = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesData.map(m => <Message message={m.message}/>)

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