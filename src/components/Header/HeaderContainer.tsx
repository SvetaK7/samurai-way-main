import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType2} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component <any,any>{

    // componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then(response => {
        //     if (response.data.resultCode === 0){
        //         let {id, email, Login} = response.data.data;
        //         this.props.setAuthUserData( id, email, Login);
        //     }
        // });

        // authAPI.getLoginUsers().then(data => {
        //     if (data.resultCode === 0){
        //                 let {id, email, Login} = data.data;
        //                 this.props.setAuthUserData( id, email, Login);
        //             }
        // })
        // authAPI.getLoginUsers().then(response => {
        //     if (response.data.resultCode === 0){
        //         let {id, email, Login} = response.data.data;
        //         this.props.setAuthUserData( id, email, Login);
        //     }
        // })
    //     this.props.getAuthUserDataThunk()
    // }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: AppStateType2) => {
    return ({
            isAuth: state.auth.isAuth,
            login: state.auth.login
        }
    )
}
export default connect(mapStateToProps, {logout})(HeaderContainer);