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
import {UserType} from "../../redux/state";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // });
    }

    onPageChanged(pageNumber: number) {
        // this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
        //
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        // });
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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