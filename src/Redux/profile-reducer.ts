import {followedAPI, userAPI} from '../api'
import {stopSubmit} from 'redux-form';

const ADD_POST: string = 'ADD-POST';
const NEW_POST: string = 'NEW-POST';
const LIKE: string = 'LIKE';
const DIS_LIKE: string = 'DIS-LIKE';
const USER_PROFILE: string = 'USER_PROFILE'
const SET_FOLLOWED_USER: string = 'SET-FOLLOWED-USER'
const GET_USER_STATUS: string = 'GET_USER_STATUS'
const CHANGE_MY_STATUS: string = 'CHANGE_MY_STATUS'
const SET_MY_PHOTOS: string = 'SET_MY_PHOTOS'
const FOLLOWED_TOGGLE: string = 'FOLLOWED_TOGGLE'
const SET_IS_PUT_DATA: string = 'SET_IS_PUT_DATA'
const SET_DISABLE_BTN: string = 'SET_DISABLE_BTN'
const SET_USER_ID_PROFILE: string = 'profile-user-id/SET_USER-ID_PROFILE'

type LikeAndDisType = {
   status: boolean
   count: number
}

export type PostsType = {
   id: number
   user: string
   message: string
   like:  LikeAndDisType
   disLike: LikeAndDisType
}
type ContactsType = {
   github: string | null
   vk: string | null
   facebook: string | null
   instagram: string | null
   twitter: string | null
   website: string | null
   youtube: string | null
   mainLink: string | null
}

type PhotoType = {
   small: string | null
   large: string | null
}

type UsersType = {
   id: number
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: Array<ContactsType>
   photos: Array<PhotoType>
}

let initialState = {
   User: {} as UsersType,
   userStatus: null as null | string,
   followedUser: null as null | boolean,
   newPostText: '' as string,
   text: 0 as number,
   isPutData: null as null | boolean,
   disableBtn: null as null | boolean,
   userId: null as null | number,
   posts: [{
      id: 1,
      user: 'Andery',
      message: 'Hello how are you?',
      like: {
         status: true,
         count: 56,
      },
      disLike: {
         status: false,
         count: 3,
      }
   },
      {
         id: 2,
         user: 'Dimon',
         message: 'Hello! I am ok) And you?',
         like: {
            status: false,
            count: 8,
         },
         disLike: {
            status: false,
            count: 0,
         }
      },
      {
         id: 3,
         user: 'Ivan',
         message: 'My first posts...',
         like: {
            status: false,
            count: 5,
         },
         disLike: {
            status: true,
            count: 5,
         }
      },
      {
         id: 4,
         user: 'Ivan',
         message: 'Bye!',
         like: {
            status: false,
            count: 2,
         },
         disLike: {
            status: true,
            count: 7,
         }
      }
   ] as Array<PostsType>
}

export type InitialStateType = typeof initialState

let PROFILE_REDUCER = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: Date.now(),
            user: 'User name',
            message: action.post,
            like: {
               status: false,
               count: 0,
            },
            disLike: {
               status: false,
               count: 0,
            }
         }
         return {
            ...state,
            posts: [newPost, ...state.posts],
         }
      case NEW_POST:
         return {
            ...state,
            newPostText: action.text,
         }

      case LIKE:
         if (!state.posts[action.index].like.status) {
            return {
               ...state,
               ...state.posts[action.index] = {
                  ...state.posts[action.index],
                  like: {
                     status: true,
                     count: state.posts[action.index].like.count + 1,
                  },
                  disLike: {
                     status: false,
                     count: state.posts[action.index].disLike.status === true
                        ? state.posts[action.index].disLike.count - 1
                        : state.posts[action.index].disLike.count,
                  }
               },
               text: state.posts[action.index].like.count,
            }
         } else return {
            ...state,
            ...state.posts[action.index] = {
               ...state.posts[action.index],
               like: {
                  status: false,
                  count: state.posts[action.index].like.count - 1,
               },
            },
            text: state.posts[action.index].like.count,
         }
      case DIS_LIKE:
         if (!state.posts[action.index].disLike.status) {
            return {
               ...state,
               ...state.posts[action.index] = {
                  ...state.posts[action.index],
                  disLike: {
                     status: true,
                     count: state.posts[action.index].disLike.count + 1,
                  },
                  like: {
                     status: false,
                     count: state.posts[action.index].like.status === true
                        ? state.posts[action.index].like.count - 1
                        : state.posts[action.index].like.count,
                  }
               },
               text: state.posts[action.index].disLike.count,
            }
         } else return {
            ...state,
            ...state.posts[action.index] = {
               ...state.posts[action.index],
               disLike: {
                  status: false,
                  count: state.posts[action.index].disLike.count - 1,
               },

            },
            text: state.posts[action.index].disLike.count,
         }
      case USER_PROFILE:
         return {
            ...state,
            User: {...action.user}
         }
      case SET_FOLLOWED_USER:
         return {
            ...state,
            followedUser: action.follow
         }
      case FOLLOWED_TOGGLE:
         return {
            ...state,
            followedUser: state.followedUser = !state.followedUser
         }
      case GET_USER_STATUS:
         return {
            ...state,
            userStatus: action.status
         }
      case CHANGE_MY_STATUS:
         return {
            ...state,
            userStatus: action.status,
         }
      case SET_MY_PHOTOS:
         return {
            ...state,
            User: {...state.User, photos: {...action.photos}}
         }
      case SET_IS_PUT_DATA:
         return {
            ...state,
            isPutData: action.boolean,
         }
      case SET_DISABLE_BTN:
         return {
            ...state,
            disableBtn: action.boolean,
         }
      case SET_USER_ID_PROFILE:
         return {
            ...state,
            userId: action.id,
         }
      default:
         return state;
   }
}

export let actionCreatorAddPost = (post:string) => ({
   type: ADD_POST,
   post,
})
export let actionCreatorChangePost = (text:string) => ({
   type: NEW_POST,
   text: text,
})
export let actionCreatorLike = (index:number) => ({
   type: LIKE,
   index: index,
})
export let actionCreatorDisLike = (index:number) => ({
   type: DIS_LIKE,
   index: index,
})
export let setUserProfile = (user:object) => ({
   type: USER_PROFILE,
   user: user,
})
export let setFollowedUser = (follow:boolean) => ({
   type: SET_FOLLOWED_USER,
   follow,
})
export let FollowToggle = () => ({
   type: FOLLOWED_TOGGLE,
})
export let UserStatus = (status:string) => ({
   type: GET_USER_STATUS,
   status
})
export let changeValueMyStatus = (status:string) => ({
   type: CHANGE_MY_STATUS,
   status,
})
let setMyPhotos = (photos:string) => ({
   type: SET_MY_PHOTOS,
   photos,
})
let setIsPutData = (boolean:boolean) => ({
   type: SET_IS_PUT_DATA,
   boolean
})
let setDisableBtn = (boolean:boolean) => ({
   type: SET_DISABLE_BTN,
   boolean
})
export const setUserIdProfile = (id:number) => ({
   type: SET_USER_ID_PROFILE,
   id
})

export const getUserProfileThankCreator = (userId:number) => async (dispatch:any) => {
   await dispatch(setIsPutData(true))
   await userAPI.getUserProfile(userId).then(data => dispatch(setUserProfile(data)));
   dispatch(setIsPutData(false))
}

export const getFollowThankCreator = (userId:number) => (dispatch:any) => {
   followedAPI.getFollow(userId).then(data => dispatch(setFollowedUser(data)));
}

export const getUserStatus = (userId:number) => (dispatch:any) => {
   userAPI.getUserStatus(userId).then(data => dispatch(UserStatus(data)));
}

export const saveMyPhotoTC = (photo:string) => (dispatch:any) => {
   userAPI.putMyPhoto(photo).then(data => {
      if (data.resultCode === 0) {
         dispatch(setMyPhotos(data.data.photos))
      }
   })
}

export const saveMyDataTC = (data:object, userId:number) => async (dispatch:any) => {
   await dispatch(setDisableBtn(true))
   await userAPI.putMyData(data).then(response => {

      if (response.data.resultCode === 0) {
         userAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
            dispatch(setIsPutData(true))
            dispatch(stopSubmit('UserEditForm', {_error: undefined}))
         });
      } else {
         dispatch(stopSubmit('UserEditForm', {_error: response.data.messages[0]}))
      }
   })
   dispatch(setDisableBtn(false))
   setTimeout(() => {
      dispatch(setIsPutData(false))
   }, 5000);
}

export default PROFILE_REDUCER;