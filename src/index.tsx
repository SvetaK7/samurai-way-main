import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {store, StoreType} from "./redux/state";
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
const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>, document.getElementById('root')
    );
}


// let renderEntireTree = (state: StateType) => {
//
//
// }
//
renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    renderEntireTree(state);
});