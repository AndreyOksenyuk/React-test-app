import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, newPostFun } from './State'

export let renderEntireTree = (state) => {
   ReactDOM.render(
   <React.StrictMode>
      <App state={state} addPost={addPost} newPostFun={newPostFun} />
   </React.StrictMode>,
   document.getElementById('root')
   )
}




