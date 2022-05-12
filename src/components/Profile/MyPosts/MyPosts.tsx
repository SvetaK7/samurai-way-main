import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {TProfilePage} from "../../../redux/state";

const MyPosts = (props: TProfilePage) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                               title={p.title}/>)

    let newPostElement : RefObject<HTMLTextAreaElement> = React.createRef();
    const addPost = () => {
        let text = newPostElement.current?.value;
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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