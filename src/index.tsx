import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts= [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 11},
    {id: 3, message: 'It is my second post', likesCount: 11},
];

const dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Artem'},
    {id: 4, name: 'Egor'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
]

const messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hey'},
    {id: 4, message: 'I am happy'},
    {id: 5, message: 'You are welcome'},
    {id: 6, message: 'I am cooking pizza today'}
]

ReactDOM.render(
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);