import React, {RefObject} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPage, TDialogsPage} from "../../redux/state";

const Dialogs = (props: TDialogsPage) => {

    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message}/>)

    let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addMessage = () => {
        props.addMessage();
    }

    const onMessageChange = () => {
        let text = newMessageElement.current?.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <textarea ref={newMessageElement}
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText}></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;