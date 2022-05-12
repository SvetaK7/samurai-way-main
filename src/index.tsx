import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from "./redux/state";
import {renderEntireTree} from "./render";


renderEntireTree(state);
// ReactDOM.render(
//     <BrowserRouter>
//         <App appState={state} addPost={addPost}/>
//     </BrowserRouter>, document.getElementById('root')
// );