import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile, {PostType} from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";

type IPropsApp = {
    dialogsData: Array<DialogItemType>,
    posts: Array<PostType>
    messagesData: Array<MessagePropsType>
}

function App(props: IPropsApp) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path={"/profile"} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={"/news"} render={() => <News />}/>
                    <Route path={"/music"} render={() => <Music />}/>
                    <Route path={"/settings"} render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
