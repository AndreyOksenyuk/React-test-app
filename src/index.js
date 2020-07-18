import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';

let renderEntireTree = (store) => {
   ReactDOM.render(
   <React.StrictMode>
      <StoreContext.Provider value={store}>
         <App />
      </StoreContext.Provider>
   </React.StrictMode>,
   document.getElementById('root')
   )
}
renderEntireTree(store)

store.subscribe(() => {
   renderEntireTree(store)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();