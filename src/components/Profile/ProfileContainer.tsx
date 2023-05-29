import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, getUserProfileThunk, savePhoto, updateStatusThunk} from "../../redux/profile-reducer";
import {AppStateType2} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component<any, any> {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile {...this.props}
               isOwner={!this.props.match.params.userId}
               profile={this.props.profile}
               status={this.props.status}
               updateStatusThunk={this.props.updateStatusThunk}
               savePhoto={this.props.savePhoto}
      />
    );
  }
}


const mapStateToProps = (state: AppStateType2) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
})
//
// let WithUrlDataContainerComponent =  withRouter(ProfileContainer);
// export default withAuthRedirect(connect(mapStateToProps,{getUserProfileThunk})( WithUrlDataContainerComponent));
export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhoto}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)