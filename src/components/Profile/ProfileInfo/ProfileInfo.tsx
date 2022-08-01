import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props: any) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://i.ytimg.com/vi/ditSdFr-KGA/maxresdefault.jpg" alt="photo"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;