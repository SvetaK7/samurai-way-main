import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import {updateStatusThunk} from "../../../redux/profile-reducer";

type StateType = {
    editMode: boolean
    status: string
}

export const ProfileStatusWithHooks = (props: any) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (

        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}> {props.status || 'No status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}
