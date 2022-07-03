import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StoreType} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";

export type AppStoreType = {
    store:StoreType
}

function App(props: AppStoreType) {
const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={"/dialogs"} render={() => <Dialogs
                    dialogsPage={state.dialogsPage}
                    // addMessage={props.store.addMessage.bind(store)}
                    dispatch={props.store.dispatch.bind(props.store)}
                    // updateNewMessageText={props.store.updateNewMessageText.bind(store)}

                    // messagesData={props.appState.dialogsPage.messagesData}
                    // addMessage={props.addMessage}
                />}/>
                <Route path={"/profile"} render={() => <Profile
                    profilePage={state.profilePage}
                    // addPost={props.store.addPost.bind(store)}
                    dispatch={props.store.dispatch.bind(props.store)}
                    // updateNewPostText={props.store.updateNewPostText.bind(store)}
                />}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
            <Sidebar sidebar={state.sidebar}/>
        </div>

    );
}

export default App;
