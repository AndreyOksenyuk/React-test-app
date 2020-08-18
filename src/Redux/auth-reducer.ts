import { authAPI } from '../api'
import { stopSubmit } from 'redux-form'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const LOGIN_SET_ME_ID = 'LOGIN_SET_ME_ID'
const LOGOUT = 'LOGOUT'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'
const DISABLE_SUBMIT_BUTTON = 'DISABLE_SUBMIT_BUTTON'
const SET_MY_AVATAR = 'auth-setMyAvatar/SET_MY_AVATAR'

let initialState = {
   id: null,
   login: null,
   email: null,
   myAvatar: null,
   messages: null,
   isAuth: false,
   captchaURL: null,
   disableSubmitBtn: false,
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
      case SET_CAPTCHA_URL:
         return{
            ...state,
            captchaURL: action.url,
         }
      case DISABLE_SUBMIT_BUTTON:
         return{
            ...state,
            disableSubmitBtn: action.boolean,
         }
      case SET_MY_AVATAR:
         return{
            ...state,
            myAvatar: action.avatar,
         }
      default:
         break;
   }
   return state;
}

export const setAuthData = (data) => ({
   type: SET_AUTH_DATA,
   data: data, 
})
const loginSetMeId = (id, messages, isAuth) => ({
   type: LOGIN_SET_ME_ID,
   id, messages, isAuth
})
const logout = (id, messages, isAuth) => ({
   type: LOGOUT,
   id, messages, isAuth
})
export const setCaptchaUrl = (url) => ({
   type: SET_CAPTCHA_URL,
   url,
})
const setDisableSubmitBtn = (boolean) => ({
   type: DISABLE_SUBMIT_BUTTON,
   boolean,
})
export const setMyAvatar = (avatar) => ({
   type: SET_MY_AVATAR,
   avatar,
})


export const authMeThankCreator = () => {
   return (dispatch) => {
      authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthData({...data.data})) 
            }
         })
   }
}

export const loginThankCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
   dispatch(setDisableSubmitBtn(true))
  await authAPI.postLogin(email, password, rememberMe, captcha).then(response => {
      if (response.data.resultCode === 0) {
         dispatch(loginSetMeId(response.data.data.userId, response.data.messages, true))
         authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthData({...data.data}))
               dispatch(setCaptchaUrl(null))
            }
         })
      }
      else{
         if (response.data.resultCode === 10){
            authAPI.getCaptchaURL().then(response => {
               dispatch(setCaptchaUrl(response.data.url))
            })
         }
         dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
      }
   })
   dispatch(setDisableSubmitBtn(false))
}
export const logoutThankCreator = () => (dispatch) => {
   authAPI.deleteLogin().then(response => {
      if (response.data.resultCode === 0) {
         dispatch(logout(null, null, false))
      }
   })
}


export default AUTH_REDUCER;