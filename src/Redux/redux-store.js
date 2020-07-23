import { combineReducers, createStore } from 'redux'
import profilePage from './profile-reducer'
import messagePage from './message-reducer'
import newsPage from './news-reducer'
import usersPage from './users-reducer'
import auth from './auth-reducer'

let reducers = combineReducers({
   profilePage,
   messagePage,   
   usersPage,
   newsPage,
   auth,
});

let store = createStore(reducers)

export default store;