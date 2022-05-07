import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {TProfilePage} from "../../redux/state";

const Profile = (props:TProfilePage) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}/>
        </div>
    );
}

export default Profile;