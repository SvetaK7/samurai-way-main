import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { store } from './redux/redux-store';
import {Provider} from "react-redux";
import {StateType, StoreType} from "./redux/state";
import SamuraiApp from "./App";


   /* ReactDOM.render(
        <Provider store={store}>
            <App store={store}/>
        </Provider>, document.getElementById('root')
    );*/


// renderEntireTree();
//
// store.subscribe(renderEntireTree);
// const renderEntireTree = (state: StateType) => {
// @ts-ignore
ReactDOM.render(<SamuraiApp />, document.getElementById('root'));
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