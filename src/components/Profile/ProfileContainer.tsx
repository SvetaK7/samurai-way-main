import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getStatusThunk, getUserProfileThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {AppStateType2} from "../../redux/redux-store";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        console.log(userId)
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfileThunk(userId);
        this.props.getStatusThunk(userId);
        // usersAPI.getProfile(userId).then(response => {
        //     this.props.setUserProfile(response.data)
        // });
    }

    render(){
        return (
           <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} />
        );
    }
}


const mapStateToProps = (state: AppStateType2) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
//
// let WithUrlDataContainerComponent =  withRouter(ProfileContainer);
// export default withAuthRedirect(connect(mapStateToProps,{getUserProfileThunk})( WithUrlDataContainerComponent));
export default compose<React.ComponentType>(
    connect(mapStateToProps,{ getUserProfileThunk,getStatusThunk, updateStatusThunk}),withRouter,withAuthRedirect)(ProfileContainer)