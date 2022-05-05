import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../Profile";


const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.item}>{props.message}</div>
            <div>
                <span>{props.likesCount}Like</span>
            </div>
        </div>

    )
}

export default Post;