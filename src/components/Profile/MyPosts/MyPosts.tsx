import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {TProfilePage} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props: TProfilePage) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                               title={p.title}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
    const addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
        // if (newPostElement.current?.value != undefined) {
        //     newPostElement.current.value = '';
        // }
        // props.updateNewPostText('');
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        // props.updateNewPostText(text);
        const action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onPostChange}/>
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