import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <ProfileStatus status={'hey'}/>
    );
}

export default ProfileInfo;