import { getAuthMe, postLogin, deleteLogin } from '../api'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const LOGIN_SET_ME_ID = 'LOGIN_SET_ME_ID'
const LOGOUT = 'LOGOUT'

let initialState = {
   id: null,
   login: null,
   email: null,
   messages: null,
   isAuth: false,
}

let AUTH_REDUCER = function (state = initialState, action) {
   switch (action.type) {
      case SET_AUTH_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true, 
         }
      case LOGIN_SET_ME_ID:
         return {
            ...state,
            id: action.id,
            messages: action.messages,
            isAuth: action.isAuth,
         }
      case LOGOUT:
         return {
            ...state,
            id: action.id,
            login: null,
            email: null,
            messages: action.messages,
            isAuth: action.isAuth,
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
let loginSetMeId = (id, messages, isAuth) => ({
   type: LOGIN_SET_ME_ID,
   id, messages, isAuth
})
let logout = (id, messages, isAuth) => ({
   type: LOGOUT,
   id, messages, isAuth
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
      if (response.data.resultCode === 0) {
         dispatch(loginSetMeId(response.data.data.userId, response.data.messages, true))
         getAuthMe().then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthData({
                  ...data.data
               }))
            }
         })
      }
   })
}
export const logoutThankCreator = () => (dispatch) => {
   deleteLogin().then(response => {
      if (response.data.resultCode === 0) {
         dispatch(logout(null, null, false))
      }
   })
}

export default AUTH_REDUCER;