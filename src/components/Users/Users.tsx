import React from 'react'
import {UserType} from "../../redux/state";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type UsersType = {
    followThunk: (userID: number) => void
    unfollowThunk: (userID: number) => void
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: []
}

export const Users = (props: UsersType) => {

    return <div>

        <Paginator pageSize={props.pageSize} totalUsersCount={props.totalUsersCount} currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
        <div>
            {
                props.users.map((u: UserType) => <User key={u.id}
                                                       u={u}
                                                       followThunk={props.followThunk}
                                                       unfollowThunk={props.unfollowThunk}
                                                       followingInProgress={props.followingInProgress}/>)
            }
        </div>

    </div>
}