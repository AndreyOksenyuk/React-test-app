const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const IS_FETCHING = 'IS_FETCHING'
const DISABLE_SUBSCRIBE_BTN = 'DISABLE_SUBSCRIBE_BTN'

let initialState = {
   users: [],
   numberOfPages: 1,
   numberOfUsers: 6,
   totalUsersCount: 0,
   isFetching: false,
   portitionSize: 10,
   disableSubscribeBtn: []
}

let USERS_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: 
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id ) {
                  return {...e, followed: true}
               }
               return e
            })
         }                
      case UNFOLLOW: 
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id ) {
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
               ?  [...state.disableSubscribeBtn, action.userId] 
               :  state.disableSubscribeBtn.filter(id => id !== action.userId) 
               
         }                            
      default:
         return state;
   }
}

export let follow = (id) => {
   return {
      type: 'FOLLOW',
      id: id,
   }
}
export let unfollow = (id) => {
   return {
      type: 'UNFOLLOW',
      id: id,
   }
}
export let setUsers = (users) => {
   return {
      type: 'SET-USERS',
      users: users,
   }
}
export let setPage = (page) => {
   return {
      type: 'SET-PAGE',
      page: page,
   }
}
export let setTotalCount = (number) => {
   return {
      type: 'SET-TOTAL-COUNT',
      totalCount: number,
   }
}
export let isFetching = (isFetching) => {
   return {
      type: 'IS_FETCHING',
      isFetching,
   }
}
export let disableBtn = (userId, isFeatching) => {
   return {
      type: 'DISABLE_SUBSCRIBE_BTN',
      userId, isFeatching

   }
}


export default USERS_REDUCER;