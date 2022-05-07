import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {TProfilePage} from "../../../redux/state";

const MyPosts = (props: TProfilePage) => {

     let postsElements = props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount} title={p.title}/>)

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                    <div className = {s.posts}>
                      {postsElements}
                    </div>
                </div>

            </div>
    );
}

export default MyPosts;