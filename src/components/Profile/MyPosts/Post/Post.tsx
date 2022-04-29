import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likeCount: string
}
const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.item}>{props.message}</div>
            <div>
                <span>{props.likeCount}Like</span>
            </div>
        </div>

    )
}

export default Post;