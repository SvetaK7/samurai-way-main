import React from 'react'
import s from "./Users.module.css";
import {UserType} from "../../redux/state";
import userPhoto from "../../assets/img/profile.png";
import {NavLink} from "react-router-dom";


type UserComponentType = {
    u: UserType
    followThunk: (userID: number) => void
    unfollowThunk: (userID: number) => void
    followingInProgress: []
}

export const User = (props: UserComponentType) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.u.id}>
                            <img src={props.u.photos.small != null ? props.u.photos.small : userPhoto} className={s.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.u.id)} onClick={() => {
                                props.unfollowThunk(props.u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.u.id)} onClick={() => {
                                props.followThunk(props.u.id)
                            }}>Follow</button>}
                    </div>
                </span>
        <span>
                    <span>
                        <div>{props.u.name}</div>
                        <div>{props.u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
    </div>
}