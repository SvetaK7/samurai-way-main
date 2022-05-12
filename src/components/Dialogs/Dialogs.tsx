import React, {RefObject} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPage} from "../../redux/state";

const Dialogs = (props: DialogsPage) => {

    let dialogsElement = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesData.map(m => <Message message={m.message}/>)

    let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();
    const addMessage = () => {
        let message = newMessageElement.current?.value;
        alert(message);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;