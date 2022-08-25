import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType2} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component <any,any>{

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then(response => {
        //     if (response.data.resultCode === 0){
        //         let {id, email, login} = response.data.data;
        //         this.props.setAuthUserData( id, email, login);
        //     }
        // });
        usersAPI.getLoginUsers().then(data => {
            if (data.resultCode === 0){
                        let {id, email, login} = data.data;
                        this.props.setAuthUserData( id, email, login);
                    }
        })
    }

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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);