import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type PostType={
    id?: number
    message: string
    likesCount: number
}
export type PostsType={
    posts: Array<PostType>
}

const Profile = (props:PostsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;