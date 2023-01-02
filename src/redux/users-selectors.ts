import {AppStateType2} from "./redux-store";

export const getUsers = (state: AppStateType2) => {
    return state.usersPage.users
}
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