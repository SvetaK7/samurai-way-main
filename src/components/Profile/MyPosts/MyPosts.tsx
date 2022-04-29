import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>New post</div>
                <div className = {s.posts}>
                    <Post message = {'Hi, how are you'} likeCount = {8}/>
                    <Post message = {'It is my first post'} likeCount = {15}/>
                </div>
            </div>
    );
}

export default MyPosts;