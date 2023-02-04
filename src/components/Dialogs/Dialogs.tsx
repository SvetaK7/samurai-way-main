import React, {useEffect} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPage} from "../../redux/state";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../utils/validators/validators";

type DialogsNewType = {
    updateNewMessageText: (text: string) => void
    addMessage: (values: string) => void
    dialogsPage: DialogsPage;
    isAuth: boolean
}


const Dialogs = (props: DialogsNewType) => {
    const state = props.dialogsPage
    let dialogsElement = state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                     id={dialog.id}/>);
    let messagesElements = state.messagesData.map(m => <Message key={m.id} message={m.message}/>)

    // let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    // const addMessage = () => {
    //     props.addMessage();
    // }

    // const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.target.value;
    //     props.updateNewMessageText(text);
    // }

    // if(!props.isAuth) return <Redirect to={"/login"}/>

    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
              <AddMessageFormRedux onSubmit={addNewMessage}/>

                <div>{messagesElements}</div>
            </div>
        </div>
    )
}

// type FormDataType = {
//     NewMessageBody: string
// }

const maxLenghtCreator100 =  maxLenghtCreator(100)
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl}
                       elementType={'textarea'}
                       name={'newMessageText'}
                       placeholder={'Enter your message'}
                       validate={[required, maxLenghtCreator100]}/>
                {/*<textarea*/}
                {/*onChange={onMessageChange}*/}
                {/*value={state.newMessageText}></textarea>*/}
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;