import {ActionsTypes, UserType} from "./state";

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
            debugger
            return {
                ...state,
                ...action.payload,
                isAuth: true

            }

        default:
            return state;
    }
}


export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    payload: {id, email, login}
})
