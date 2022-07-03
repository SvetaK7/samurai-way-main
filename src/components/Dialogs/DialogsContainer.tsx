import React, {ChangeEvent, RefObject} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { TDialogsPage} from "../../redux/state";
import {AddMessageActionCreator, UpdateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStoreType} from "../../App";


const DialogsContainer = (props: AppStoreType) => {

    const addMessage = () => {
        // props.addMessage();
        props.store.dispatch(AddMessageActionCreator());
    }

    const onMessageChange = (text: string) => {
        props.store.dispatch(UpdateNewMessageText(text));
    }

    return <Dialogs UpdateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    dialogsPage={props.store.getState().dialogsPage}/>
}

export default DialogsContainer;