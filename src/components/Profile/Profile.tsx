import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType, TProfilePage} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../../App";

const Profile = (props: AppStoreType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;