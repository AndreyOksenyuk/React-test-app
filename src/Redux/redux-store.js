import { combineReducers, createStore, applyMiddleware } from 'redux'
import App from './App-reducer'
import profilePage from './profile-reducer'
import messagePage from './message-reducer'
import newsPage from './news-reducer'
import usersPage from './users-reducer'
import auth from './auth-reducer'
import musicPage from './music-reducer'
import settingPage from './settings-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   App,
   profilePage,
   messagePage,
   settingPage,   
   usersPage,
   newsPage,
   musicPage,
   auth,
   form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;