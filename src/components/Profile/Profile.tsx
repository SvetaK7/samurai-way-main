import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {ProfilePageType} from "../../redux/state";

export type ProfileT = {
  profile: ProfilePageType
  status: string
  updateStatusThunk: any
  isOwner: boolean
  savePhoto: (file: File) => void

}

const Profile = (props: ProfileT) => {

  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatusThunk={props.updateStatusThunk}
      />
      <MyPostsContainer/>
    </div>
  );
}

export default Profile;