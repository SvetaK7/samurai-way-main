import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, subscribe} from "./redux/state";
import {addMessage, addPost, StateType, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>\
            <App appState={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);
// ReactDOM.render(
//     <BrowserRouter>
//         <App appState={state} addPost={addPost}/>
//     </BrowserRouter>, document.getElementById('root')
// );