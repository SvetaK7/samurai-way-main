import {ActionsTypes} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12, title: "https://bipbap.ru/wp-content/uploads/2020/11/kartinki-koshek_30.jpg"},
            {id: 2, message: 'It is my first post', likesCount: 11, title: "https://printovo.ru/10735-large_default/kot-sajmona.jpg"},
            {id: 3, message: 'It is my second post', likesCount: 11, title: "https://images.ua.prom.st/441474411_w640_h640_vinilovaya-naklejka-sajmon.jpg"}
        ],
        newPostText: ''
    }

export const profileReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type){
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                title: "https://coolsen.ru/wp-content/uploads/2021/01/image051-45.jpg"
            };
            return  {...state, posts : [...state.posts, newPost], newPostText : ''};
        case UPDATE_NEW_POST_TEXT:
            return  {...state, newPostText : action.newText};
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text: string | undefined) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}