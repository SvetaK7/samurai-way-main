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
}

export type DialogItemType = {
    name: string;
    id: number;
}

export type MessagePropsType = {
    id?: number
    message: string
}

export type DialogsPage = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessagePropsType>
}

export type PostType = {
    id?: number
    message: string | undefined
    likesCount: number
    title: string
}

export type PostsType = {
    posts: Array<PostType>
}

export type TProfilePage = {
    profilePage: PostsType;
    addPost : (postMessage: string | undefined) => void;
}

export type TDialogsPage = {
    dialogsPage: DialogsPage;
}

/*export type TState = TProfilePage & TDialogsPage & TSydebar;*/

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: FriendsType
}

export type AppStateType = {
    appState: StateType
    addPost : (postMessage: string | undefined) => void
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12, title: "https://bipbap.ru/wp-content/uploads/2020/11/kartinki-koshek_30.jpg"},
            {id: 2, message: 'It is my first post', likesCount: 11, title: "https://printovo.ru/10735-large_default/kot-sajmona.jpg"},
            {id: 3, message: 'It is my second post', likesCount: 11, title: "https://images.ua.prom.st/441474411_w640_h640_vinilovaya-naklejka-sajmon.jpg"}
        ]
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
        ]
    },
    sidebar:{
        friends: [
            {id: 1, name: 'Egor', title: 'https://s00.yaplakal.com/pics/pics_original/7/9/8/13756897.jpg'},
            {id: 2, name: 'Victor', title: 'https://i05.fotocdn.net/s114/6144ac768ea81878/public_pin_m/2572099844.jpg'},
            {id: 3, name: 'Valera', title: 'https://kartinkin.net/uploads/posts/2021-07/1626224836_12-kartinkin-com-p-tolstii-kot-art-art-krasivo-12.jpg'}
        ]
    }

}

export let addPost = (postMessage: string | undefined) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
        title: "https://coolsen.ru/wp-content/uploads/2021/01/image051-45.jpg"
    };
    state.profilePage.posts.push(newPost);
}