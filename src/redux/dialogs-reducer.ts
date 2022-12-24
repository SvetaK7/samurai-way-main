import {ActionsTypes, DialogsPage} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],

    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey'},
        {id: 4, message: 'I am happy'},
        {id: 5, message: 'You are welcome'},
        {id: 6, message: 'I am cooking pizza today'}
    ]
}

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type){
        case ADD_MESSAGE:
            const newMessage = {
                id: 7,
                message: action.newMessageText
            }
            return  {...state,
                messagesData : [...state.messagesData, newMessage],
                };
        //
        // case UPDATE_NEW_MESSAGE_TEXT:
        //     return  {...state, newMessageText : action.newMessage};
        default: return state;
    }
}

export const AddMessageActionCreator = (newMessageText: string) => ({ type: ADD_MESSAGE, newMessageText })
// export const UpdateNewMessageText = (text: string | undefined) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
//     }
// }