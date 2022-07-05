import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { store } from './redux/redux-store';
import {Provider} from "react-redux";
import {StateType, StoreType} from "./redux/state";


   /* ReactDOM.render(
        <Provider store={store}>
            <App store={store}/>
        </Provider>, document.getElementById('root')
    );*/


// renderEntireTree();
//
// store.subscribe(renderEntireTree);
// const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>

        </BrowserRouter>, document.getElementById('root')
    );
// }


// let renderEntireTree = (state: StateType) => {
//
//
// }
//



// renderEntireTree(store.getState());
//
// store.subscribe(() => {
//     const state = store.getState();
//     renderEntireTree(state);
// });