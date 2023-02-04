import React from 'react';
import {connect} from "react-redux";
import {AppStateType2} from "../../redux/redux-store";
import {
    follow, followThunk, getUsersThunk,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow, unfollowThunk
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

export class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props  //destructurization props
        this.props.getUsersThunk(currentPage,pageSize)
    }

    onPageChanged(pageNumber: number) {
        const {pageSize} = this.props;
        this.props.getUsersThunk(pageNumber, pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged.bind(this)}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType2) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

// export default connect(mapStateToProps, {
//     follow, unfollow, setUsers,
//     setCurrentPage, setTotalUsersCount, toggleIsFetching,
//     toggleFollowingProgress, getUsersThunk, followThunk, unfollowThunk
// })(UsersContainer);

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching,
    toggleFollowingProgress, getUsersThunk, followThunk, unfollowThunk
}))(UsersContainer)