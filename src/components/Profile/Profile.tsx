import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {ProfilePageType} from "../../redux/state";

export type ProfileT = {
    profile: ProfilePageType
    status: string
    updateStatusThunk: any

}

const Profile = (props: ProfileT) => {

      return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;