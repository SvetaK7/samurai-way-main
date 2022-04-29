import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://i.ytimg.com/vi/ditSdFr-KGA/maxresdefault.jpg" alt="photo"></img>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
}

export default Profile;