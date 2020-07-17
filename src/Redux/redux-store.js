import { combineReducers, createStore } from 'redux'
import profilePage from './profile-reducer'
import messagePage from './message-reducer'
import newsPage from './news-reducer'

let reducers = combineReducers({
   profilePage,
   messagePage,
   newsPage,
});

let store = createStore(reducers)

export default store;