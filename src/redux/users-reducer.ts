import {ActionsTypes, UserType} from "./state";

export type InitialStateType = {
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState : InitialStateType = {
        users: [
            // {id: 1, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: true, fullName: 'Sveta K', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            // {id: 2, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: false, fullName: 'Kate K', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
            // {id: 3, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: true, fullName: 'Gudi H', status: 'I am a boss too', location: {city: 'Kiew', country: 'Ukraine'}},
        ],
    }

export const usersReducer = (state = initialState, action: ActionsTypes) : InitialStateType => {

    switch (action.type){
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ? {...u, followed: true} : u})
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ? {...u, followed: false} : u})
            }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }

        default: return state;
    }
}

export const followAC = (userID: number) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID: number) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users: Array<UserType>) => ({ type: SET_USERS, users })