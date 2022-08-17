import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType2} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        console.log(userId)
        if (!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render(){
        return (
           <Profile profile={this.props.profile} />
        );
    }
}
const mapStateToProps = (state: AppStateType2) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile})( WithUrlDataContainerComponent);