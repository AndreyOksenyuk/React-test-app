import { getAuthMe, postLogin, deleteLogin } from '../api'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const LOGIN_SET_ME_ID = 'LOGIN_SET_ME_ID'
const LOGOUT = 'LOGOUT'

let initialState = {
   id: null,
   login: null,
   email: null,
   messages: [],
}

let AUTH_REDUCER = function (state = initialState, action) {
   switch (action.type) {
      case SET_AUTH_DATA:
         return {
            ...state,
            ...action.data,
         }
      case LOGIN_SET_ME_ID:
         return {
            ...state,
            id: action.id,
            messages: [...action.messages]
         }
      case LOGOUT:
         return {
            ...state,
            id: null,
         }
      default:
         break;
   }
   return state;
}

export let setAuthData = (data) => ({
   type: SET_AUTH_DATA,
   data: data, 
})
let loginSetMeId = (id, messages) => ({
   type: LOGIN_SET_ME_ID,
   id, messages
})
let logout = () => ({
   type: LOGOUT,
})

export const authMeThankCreator = () => {
   return (dispatch) => {
      getAuthMe().then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthData({...data.data})) 
            }
         })
   }
}

export const loginThankCreator = (email, password, rememberMe) => (dispatch) => {
      postLogin(email, password, rememberMe).then(response => {
         dispatch(loginSetMeId(response.data.data.userId, response.data.messages))
      })
   }
export const logoutThankCreator = () => (dispatch) => {
      deleteLogin().then(dispatch(logout()))
   }

export default AUTH_REDUCER;