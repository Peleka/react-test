import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText, subscribe } from './redux/state'
import state from './redux/state'


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
     <App state={state} addPost={ addPost } updateNewPostText={ updateNewPostText } />
    </BrowserRouter>, document.getElementById('root')
  );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);