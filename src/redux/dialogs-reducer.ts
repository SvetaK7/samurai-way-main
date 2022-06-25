import {ActionsTypes, DialogsPage} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state: DialogsPage, action: ActionsTypes) => {

    switch (action.type){
        case ADD_MESSAGE:
            const newMessage = {
                id: 7,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default: return state;
    }
}

export const AddMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const UpdateNewMessageText = (text: string | undefined) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
    }
}