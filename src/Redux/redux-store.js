import { combineReducers, createStore } from 'redux'
import profilePage from './profile-reducer'
import messagePage from './message-reducer'
import newsPage from './news-reducer'
import usersPage from './users-reducer'

let reducers = combineReducers({
   profilePage,
   messagePage,
   newsPage,
   usersPage,
});

let store = createStore(reducers)

export default store;