import {authAPI} from '../api'
import {stopSubmit} from 'redux-form'

const SET_AUTH_DATA: string = 'SET_AUTH_DATA'
const LOGIN_SET_ME_ID: string = 'LOGIN_SET_ME_ID'
const LOGOUT: string = 'LOGOUT'
const SET_CAPTCHA_URL: string = 'SET_CAPTCHA_URL'
const DISABLE_SUBMIT_BUTTON: string = 'DISABLE_SUBMIT_BUTTON'
const SET_MY_AVATAR: string = 'auth-setMyAvatar/SET_MY_AVATAR'

type initialStateType = {
   id: null | number,
   login: null | string,
   email: null | string,
   myAvatar: null | string,
   messages: null | string,
   isAuth: boolean,
   captchaURL: null | string,
   disableSubmitBtn: boolean,
}

let initialState: initialStateType = {
   id: null,
   login: null,
   email: null,
   myAvatar: null,
   messages: null,
   isAuth: false,
   captchaURL: null,
   disableSubmitBtn: false,
}

const AUTH_REDUCER = (state = initialState, action: any): initialStateType => {
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
         return {
            ...state,
            captchaURL: action.url,
         }
      case DISABLE_SUBMIT_BUTTON:
         return {
            ...state,
            disableSubmitBtn: action.boolean,
         }
      case SET_MY_AVATAR:
         return {
            ...state,
            myAvatar: action.avatar,
         }
      default:
         break;
   }
   return state;
}

export const setAuthData = (data: any) => ({
   type: SET_AUTH_DATA,
   data: data,
})
const loginSetMeId = (id: number, messages: string, isAuth: boolean) => ({
   type: LOGIN_SET_ME_ID,
   id, messages, isAuth
})
const logout = (id: number | null, messages: string | null, isAuth: boolean) => ({
   type: LOGOUT,
   id, messages, isAuth
})
export const setCaptchaUrl = (url: string | null) => ({
   type: SET_CAPTCHA_URL,
   url,
})
const setDisableSubmitBtn = (boolean: boolean) => ({
   type: DISABLE_SUBMIT_BUTTON,
   boolean,
})
export const setMyAvatar = (avatar: string) => ({
   type: SET_MY_AVATAR,
   avatar,
})


export const authMeThankCreator = () => {
   return (dispatch: any) => {
      authAPI.getAuthMe().then(data => {
         if (data.resultCode === 0) {
            dispatch(setAuthData({...data.data}))
         }
      })
   }
}

export const loginThankCreator = (email: string, password: number, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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
      } else {
         if (response.data.resultCode === 10) {
            authAPI.getCaptchaURL().then(response => {
               dispatch(setCaptchaUrl(response.data.url))
            })
         }
         dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
      }
   })
   dispatch(setDisableSubmitBtn(false))
}
export const logoutThankCreator = () => (dispatch: any) => {
   authAPI.deleteLogin().then(response => {
      if (response.data.resultCode === 0) {
         dispatch(logout(null, null, false))
      }
   })
}

export default AUTH_REDUCER;