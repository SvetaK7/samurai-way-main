import {ActionsTypes, UserType} from "./state";

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState : InitialStateType = {
        users: [
            // {id: 1, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: true, fullName: 'Sveta K', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            // {id: 2, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: false, fullName: 'Kate K', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
            // {id: 3, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: true, fullName: 'Gudi H', status: 'I am a boss too', location: {city: 'Kiew', country: 'Ukraine'}},
        ],
    pageSize: 5,
    totalUsersCount: 2,
    currentPage: 1,
    isFetching: false

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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default: return state;
    }
}

export const followAC = (userID: number) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID: number) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users: Array<UserType>) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetchingAC = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching })