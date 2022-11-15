import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType2} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType2): MapStatePropsType => {
    return{
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T> (Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStatePropsType> {

        render() {
            let {isAuth, ...restProps} = this.props;
            if (!isAuth) return <Redirect to={"/login"}/>
            return <Component {...restProps as T}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}



//функциональная компонента

// export const withAuthRedirect = (Component) => {
// function Redirect Component (props: MapStatePropsType){
//         if (!props.isAuth) return <Redirect to={"/login"}/>
//         return <Component {...props}/>
//     }
// }