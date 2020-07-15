import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './Store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = () => {
   ReactDOM.render(
   <React.StrictMode>
      <App 
         state={store._state} 
         addPost={store.addPost.bind(store)} 
         newPostFun={store.newPostFun.bind(store)} 
      />
   </React.StrictMode>,
   document.getElementById('root')
   )
}
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();