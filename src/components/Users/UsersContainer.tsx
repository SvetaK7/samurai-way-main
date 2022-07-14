import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType2} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {UserType} from "../../redux/state";

const mapStateToProps = (state: AppStateType2) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;