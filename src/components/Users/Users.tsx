import React from 'react'
import s from "./Users.module.css";
import {UserType} from "../../redux/state";
import userPhoto from "../../assets/img/profile.png";
import {NavLink} from "react-router-dom";


type UsersType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    // setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged:(pageNumber: number) => void
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
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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