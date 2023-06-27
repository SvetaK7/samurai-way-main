import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileT} from "../Profile";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/profile.png"
import {ProfilePageType} from "redux/state";
import {ProfileDataFormReduxForm} from "components/Profile/ProfileInfo/ProfileDataForm";

export type ProfileData = {
  profile: ProfilePageType
  isOwner?: boolean
  goToEditMode?: () => void
}


const ProfileInfo = (props: ProfileT) => {
  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <img src={props.profile.photos?.large || userPhoto} className={s.mainPhoto}/>
      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
      {editMode
        ? <ProfileDataFormReduxForm/>
        : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)}/>}
      <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
    </div>

  );
}

export const ProfileData = (props: ProfileData) => {
  return <div>
    {props.isOwner && <div>
        <button onClick={props.goToEditMode}>Edit</button>
    </div>}
    <div>
      <b>Full name</b>: {props.profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
    </div>
    {props.profile.lookingForAJob &&
        <div><b>My professional skills</b>: {props.profile.lookingForAJobDescription}</div>
    }
    <div>
      <b>About me</b>: {props.profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(props.profile.contacts || {}).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
    })
    }
    </div>
  </div>
}
export const Contact = ({contactTitle, contactValue}: any) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;