import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StoreType} from "./redux/state";
import {StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>\
            <App
                store={store}
                // appState={state}
                //  addPost={store.addPost.bind(store)}
                //  updateNewPostText={store.updateNewPostText.bind(store)}
                //  addMessage={store.addMessage.bind(store)}
                //  updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree();

store.subscribe(renderEntireTree);
// ReactDOM.render(
//     <BrowserRouter>
//         <App appState={state} addPost={addPost}/>
//     </BrowserRouter>, document.getElementById('root')
// );