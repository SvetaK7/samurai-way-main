import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStoreType} from "../../../App";


const MyPostsContainer = (props: AppStoreType) => {
    const state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const onPostChange = (text: string | undefined) => {
        const action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (
        <MyPosts addPost={addPost}
                 updateNewPostText={onPostChange}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    );
}

export default MyPostsContainer;