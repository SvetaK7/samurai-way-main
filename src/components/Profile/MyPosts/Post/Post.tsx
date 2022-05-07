import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";

const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.item}>
                <img className = {s.ava} src={props.title}/>
                {props.message}</div>
            <div>
                <span>{props.likesCount}Like</span>
            </div>
        </div>

    )
}

export default Post;