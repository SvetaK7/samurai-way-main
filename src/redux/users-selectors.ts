import {AppStateType2} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: AppStateType2) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector,    (users) => {
        return users.filter(u => true)
    })

export const getPageSize = (state: AppStateType2) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType2) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType2) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType2) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType2) => {
    return state.usersPage.followingInProgress
}