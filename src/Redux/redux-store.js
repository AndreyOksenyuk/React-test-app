import { combineReducers, createStore } from 'redux'
import profilePage from './profile-reducer'
import messagePage from './message-reducer'

let reducers = combineReducers({
   profilePage,
   messagePage,
});

let store = createStore(reducers)

export default store;