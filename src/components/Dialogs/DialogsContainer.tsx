import React, {ChangeEvent, RefObject} from 'react';
import {StateType, TDialogsPage} from "../../redux/state";
import {AddMessageActionCreator, UpdateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType2} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (props: AppStoreType) => {
//
//     const addMessage = () => {
//         props.store.dispatch(AddMessageActionCreator());
//     }
//
//     const onMessageChange = (text: string) => {
//         props.store.dispatch(UpdateNewMessageText(text));
//     }
//
//     return <Dialogs updateNewMessageText={onMessageChange}
//                     addMessage={addMessage}
//                     dialogsPage={props.store.getState().dialogsPage}/>
// }



const mapStateToProps = (state: AppStateType2) => {
    return{
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(UpdateNewMessageText(text));
        },
        addMessage: () => {
            dispatch(AddMessageActionCreator());
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
//
// export default DialogsContainer;
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);