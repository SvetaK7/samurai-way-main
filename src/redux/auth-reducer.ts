import {ActionsTypes, UserType} from "./state";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    // isFetching: boolean
}

const SET_USER_DATA = 'SET_USER_DATA';

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
}

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const getAuthUserDataThunk: any = () => (dispatch: Dispatch) => {
    authAPI.getLoginUsers().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {

    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataThunk())
        } else {
            const message = response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'
            const action = stopSubmit("login", {_error: message})
            dispatch(action);
        }
    })
}

export const logout = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
