import {ActionsTypes, FriendsType} from "./state";

const initialState = {
    friends: [
        {id: 1, name: 'Egor', title: 'https://s00.yaplakal.com/pics/pics_original/7/9/8/13756897.jpg'},
        {id: 2, name: 'Victor', title: 'https://i05.fotocdn.net/s114/6144ac768ea81878/public_pin_m/2572099844.jpg'},
        {id: 3, name: 'Valera', title: 'https://kartinkin.net/uploads/posts/2021-07/1626224836_12-kartinkin-com-p-tolstii-kot-art-art-krasivo-12.jpg'}
    ]
}

export const sidebarReducer = (state = initialState, action: ActionsTypes) => {
    return state;
}