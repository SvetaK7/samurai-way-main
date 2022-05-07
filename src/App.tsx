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
import {AppStateType} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";

function App(props: AppStateType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"} render={() => <Dialogs
                        dialogsData={props.appState.dialogsPage.dialogsData}
                        messagesData={props.appState.dialogsPage.messagesData}/>}/>
                    <Route path={"/profile"} render={() => <Profile profilePage={props.appState.profilePage}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
                <Sidebar sidebar={props.appState.sidebar}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
