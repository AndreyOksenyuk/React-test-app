import React from 'react';
import * as serviceWorker from './serviceWorker';
import state from './State'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, newPostFun, subscribe} from './State'

let renderEntireTree = (state) => {
   ReactDOM.render(
   <React.StrictMode>
      <App state={state} addPost={addPost} newPostFun={newPostFun} />
   </React.StrictMode>,
   document.getElementById('root')
   )
}
renderEntireTree(state)
subscribe(renderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();