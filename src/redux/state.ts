import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export type TSydebar = {
    sidebar: FriendsType
}

export type FriendsType = {
    friends: Array<FriendType>
}
export type FriendType = {
    name: string;
    id?: number;
    title: string;
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string | undefined
}

export type DialogItemType = {
    name: string;
    id: number;
}

export type MessagePropsType = {
    id?: number
    message: string | undefined
}

export type DialogsPage = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessagePropsType>
    newMessageText: string | undefined;
}

export type PostType = {
    id?: number
    message: string | undefined
    likesCount: number
    title: string
}

export type PostsType = {
    posts: Array<PostType>
    newPostText: string | undefined
}

export type TProfilePage = {
    profilePage: PostsType
    // addPost : () => void
    // updateNewPostText: (newText: string | undefined) => void
    dispatch: (action: any) => void
}

export type TDialogsPage = {
    dialogsPage: DialogsPage
    // addMessage: () => void
    // updateNewMessageText: (newMessage: string | undefined) => void
    dispatch: (action: any) => void
}

/*export type TState = TProfilePage & TDialogsPage & TSydebar;*/

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: FriendsType
}

export type AppStateType = {
    appState: StateType
    addPost : () => void
    // updateNewPostText: (newText: string | undefined) => void
    addMessage: () => void
    // updateNewMessageText: (newMessage: string | undefined) => void
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    // addPost: () => void
    // updateNewPostText: (newText: string | undefined) => void
    // addMessage: () => void
    // updateNewMessageText : (newMessage: string | undefined) => void
    subscribe: (observer: ()=> void) => void
    dispatch: (action: { type: string }) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType;



/*export const store : StoreType = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12, title: "https://bipbap.ru/wp-content/uploads/2020/11/kartinki-koshek_30.jpg"},
                {id: 2, message: 'It is my first post', likesCount: 11, title: "https://printovo.ru/10735-large_default/kot-sajmona.jpg"},
                {id: 3, message: 'It is my second post', likesCount: 11, title: "https://images.ua.prom.st/441474411_w640_h640_vinilovaya-naklejka-sajmon.jpg"}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ],
            newMessageText: ''
        },
        sidebar:{
            friends: [
                {id: 1, name: 'Egor', title: 'https://s00.yaplakal.com/pics/pics_original/7/9/8/13756897.jpg'},
                {id: 2, name: 'Victor', title: 'https://i05.fotocdn.net/s114/6144ac768ea81878/public_pin_m/2572099844.jpg'},
                {id: 3, name: 'Valera', title: 'https://kartinkin.net/uploads/posts/2021-07/1626224836_12-kartinkin-com-p-tolstii-kot-art-art-krasivo-12.jpg'}
            ]
        }

    },
    _callSubscriber (){
        console.log('State changed');
    },

    getState (){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;

    },

    dispatch(action: ActionsTypes){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber();
    },


    // addPost () {
    //     const newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //         title: "https://coolsen.ru/wp-content/uploads/2021/01/image051-45.jpg"
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber();
    // },
    // updateNewPostText (newText: string | undefined) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber();
    // },
    // addMessage () {
    //     const newMessage = {
    //         id: 7,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messagesData.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber();
    // }, //для страницы диалогов
    // updateNewMessageText (newMessage: string | undefined) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._callSubscriber();
    // },

}
*/
// window.store = store;

