import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../../redux/profile-reducer";
import {AppStateType2} from "../../redux/redux-store";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        console.log(userId)
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfileThunk(userId);
        // usersAPI.getProfile(userId).then(response => {
        //     this.props.setUserProfile(response.data)
        // });
    }

    render(){
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
           <Profile profile={this.props.profile} />
        );
    }
}
const mapStateToProps = (state: AppStateType2) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer);
export default connect(mapStateToProps,{getUserProfileThunk})( WithUrlDataContainerComponent);