import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileT} from "../Profile";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/profile.png"


const ProfileInfo = (props: ProfileT) => {
  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <img src={props.profile.photos?.large || userPhoto} className={s.mainPhoto}/>
      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
      <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
    </div>

  );
}

export default ProfileInfo;