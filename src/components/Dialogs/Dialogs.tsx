import React, {ChangeEvent, RefObject} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPage, TDialogsPage} from "../../redux/state";

type DialogsNewType = {
    updateNewMessageText: (text: string) => void
    addMessage: () => void
    dialogsPage: DialogsPage;
}

const Dialogs = (props: DialogsNewType) => {
    const state = props.dialogsPage
    let dialogsElement = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message}/>)

    // let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addMessage = () => {
        props.addMessage();
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <textarea
                    onChange={onMessageChange}
                    value={state.newMessageText}></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;