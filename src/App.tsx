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
import {addMessage, AppStateType, updateNewMessageText} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";

function App(props: AppStateType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={"/dialogs"} render={() => <Dialogs
                    dialogsPage={props.appState.dialogsPage}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}
                    // messagesData={props.appState.dialogsPage.messagesData}
                    // addMessage={props.addMessage}
                />}/>
                <Route path={"/profile"} render={() => <Profile
                    profilePage={props.appState.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
            <Sidebar sidebar={props.appState.sidebar}/>
        </div>

    );
}

export default App;
