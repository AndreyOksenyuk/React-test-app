import {followedAPI, userAPI} from '../api'

const FOLLOW = 'users-follow/FOLLOW';
const UNFOLLOW = 'users-unfollow/UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const IS_FETCHING = 'IS_FETCHING'
const DISABLE_SUBSCRIBE_BTN = 'DISABLE_SUBSCRIBE_BTN'


type PhotoType = {
   small: string | null
   large: string | null
}

type UsersType = {
   id: number
   name: string
   status: string | null
   photos: Array<PhotoType>
   followed: boolean
}

let initialState = {
   users: [] as Array<UsersType>,
   numberOfPages: 1 as number,
   numberOfUsers: 6 as number,
   totalUsersCount: 0 as number,
   isFetching: false as boolean,
   portitionSize: 10 as number,
   disableSubscribeBtn: [] as Array<number>
}

export type InitialState = typeof initialState

let USERS_REDUCER = (state = initialState, action: any): InitialState => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(e => {
               return e.id === action.id ? {...e, followed: true} : e
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id) {
                  return {...e, followed: false}
               }
               return e
            })
         };
      case SET_USERS:
         return {
            ...state,
            users: action.users
         }
      case SET_PAGE:
         return {
            ...state,
            users: [],
            numberOfPages: action.page
         }
      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalCount
         }
      case IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching,
         }
      case DISABLE_SUBSCRIBE_BTN:
         return {
            ...state,
            disableSubscribeBtn: action.isFeatching
               ? [...state.disableSubscribeBtn, action.userId]
               : state.disableSubscribeBtn.filter(id => id !== action.userId)

         }
      default:
         return state;
   }
}

export type FollowType = {
   type: typeof FOLLOW
   id: number
}
export let follow = (id: number): FollowType => {
   return {
      type: FOLLOW,
      id: id,
   }
}
export let unfollow = (id: number) => {
   return {
      type: UNFOLLOW,
      id: id,
   }
}
export let setUsers = (users: Array<UsersType>) => {
   return {
      type: SET_USERS,
      users: users,
   }
}
export let setPage = (page: number) => {
   return {
      type: SET_PAGE,
      page: page,
   }
}
export let setTotalCount = (number: number) => {
   return {
      type: SET_TOTAL_COUNT,
      totalCount: number,
   }
}
export let isFetching = (isFetching: boolean) => {
   return {
      type: IS_FETCHING,
      isFetching,
   }
}
export let disableBtn = (userId: number, isFeatching: boolean) => {
   return {
      type: DISABLE_SUBSCRIBE_BTN,
      userId, isFeatching

   }
}

export const getUsersThankCreator = (numberOfPages: number, numberOfUsers: number) => {
   return (dispatch: any) => {
      dispatch(isFetching(true))
      userAPI.getUsers(numberOfPages, numberOfUsers).then(data => {
         dispatch(setUsers(data.items))
         dispatch(setTotalCount(data.totalCount))
         dispatch(isFetching(false))
      })
   }
}

export const unfollowThunk = (id: number) => {
   return (dispatch: any) => {
      dispatch(disableBtn(id, true))
      followedAPI.deleteFollow(id).then(data => {
         if (data.resultCode === 0) {
            dispatch(unfollow(id))
         }
         dispatch(disableBtn(id, false))
      })
   }
}
export const followThunk = (id: number) => {
   return (dispatch: any) => {
      dispatch(disableBtn(id, true))
      followedAPI.postFollow(id).then(data => {
         if (data.resultCode === 0) {
            dispatch(follow(id))
         }
         dispatch(disableBtn(id, false))
      })
   }
}

export default USERS_REDUCER;