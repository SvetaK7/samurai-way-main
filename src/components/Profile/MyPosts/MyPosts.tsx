import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType, TProfilePage} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsType = {
    addPost: () => void
    updateNewPostText: (text: string | undefined ) => void
    posts: Array<PostType>
    newPostText: string | undefined
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}
                                                               title={p.title}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
    const addPost = () => {
        props.addPost();
        // if (newPostElement.current?.value != undefined) {
        //     newPostElement.current.value = '';
        // }
        // props.updateNewPostText('');
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text);
        // const action = updateNewPostTextActionCreator(text)
        // props.dispatch(action);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>
    );
}

export default MyPosts;