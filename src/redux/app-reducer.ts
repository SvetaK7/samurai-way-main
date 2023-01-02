import {ActionsTypes, UserType} from "./state";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserDataThunk} from "./auth-reducer";

export type InitialStateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp: any = () => (dispatch: Dispatch) => {
    let promise = dispatch(getAuthUserDataThunk())
    //dispatch(something)
    //dispatch(something)

    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })
}


