import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StoreType} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {store} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/profile"} render={() => <ProfileContainer/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
            {/*<Sidebar sidebar={state.sidebar}/>*/}
        </div>

    );
}

export default App;
