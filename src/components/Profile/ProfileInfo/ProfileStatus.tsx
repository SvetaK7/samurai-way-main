import React, {ChangeEvent} from 'react'
import {updateStatusThunk} from "../../../redux/profile-reducer";

type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<any, any> {
    // statusInputRef: React.RefObject<HTMLInputElement>
    // statusInputRef: React.RefObject<HTMLInputElement> = React.createRef()

    state: StateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunk(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}