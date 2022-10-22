import {ActionsTypes, UserType} from "./state";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    userId: number
    followingInProgress: number[]
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState: InitialStateType = {
    users: [
        // {id: 1, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: true, fullName: 'Sveta K', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: false, fullName: 'Kate K', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl:'https://avatars.mds.yandex.net/i?id=801a7b8f4593dc66a926861c5295a854-5876175-images-thumbs&n=13', followed: true, fullName: 'Gudi H', status: 'I am a boss too', location: {city: 'Kiew', country: 'Ukraine'}},
    ],
    pageSize: 5,
    totalUsersCount: 2,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    userId: 1

}

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ? {...u, followed: true} : u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ? {...u, followed: false} : u
                })
            }
        case SET_USERS: {
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
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const follow = (userID: number) => ({type: FOLLOW, userID})
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsersThunk = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const followThunk = (uID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, uID));
        usersAPI.usersFollow(uID).then(data => {
            if (data.resultCode === 0){
                dispatch(follow(uID))
            }
            dispatch(toggleFollowingProgress(false, uID))
        });
    }
}

export const unfollowThunk = (uID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, uID))
        usersAPI.usersUnFollow(uID).then(data => {
            if (data.resultCode === 0){
                dispatch(unfollow(uID))
            }
            dispatch(toggleFollowingProgress(false, uID))
        });
    }
}
