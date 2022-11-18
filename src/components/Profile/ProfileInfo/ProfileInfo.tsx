import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileT} from "../Profile";



const ProfileInfo = (props: ProfileT) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<img src={props.profile.photos.large/}*/}
            <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
        </div>

    );
}

export default ProfileInfo;