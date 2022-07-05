import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/state";
import {AppStateType2} from "../../../redux/redux-store";


// const MyPostsContainer = (props: AppStoreType) => {
//     const state = props.store.getState();
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//     const onPostChange = (text: string | undefined) => {
//         const action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action);
//     }
//
//     return (
//         <MyPosts addPost={addPost}
//                  updateNewPostText={onPostChange}
//                  posts={state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}
//         />
//     );
// }

const mapStateToProps = (state: AppStateType2) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text : string | undefined) => {
            const action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;