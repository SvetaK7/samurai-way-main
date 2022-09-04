import React from 'react'
import s from "./Users.module.css";
import {UserType} from "../../redux/state";
import userPhoto from "../../assets/img/profile.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/users-reducer";


type UsersType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    // setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged:(pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: []
}

export const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let newPages;
    if (props.currentPage <= 5) {
        newPages = pages.slice(0,10)
    } else {
        newPages=pages.slice(props.currentPage - 5, props.currentPage + 5)
    }

    return <div>
        <div>
            {newPages.map((p, index) => {
                return <span key={index}
                             className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}
                >{p} </span>
            })}
        </div>
        {
            props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                usersAPI.usersUnFollow(u).then(data => {
                                        if (data.resultCode === 0){
                                            props.unfollow(u.id)
                                        }
                                    props.toggleFollowingProgress(false, u.id)
                                });
                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': 'ff9bb0f4-746d-449d-8252-493e40d7aa8b'
                                //     }
                                // }).then(response => {
                                //     if (response.data.resultCode === 0){
                                //         props.unfollow(u.id)
                                //     }
                                // });

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                usersAPI.usersFollow(u).then(data => {
                                    if (data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                });
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}