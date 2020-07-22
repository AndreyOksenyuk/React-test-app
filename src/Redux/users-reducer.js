const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

let initialState = {
   users: [],
   numberOfPages: 1,
   numberOfUsers: 6,
   totalUsersCount: 0,
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
      default:
         return state;
   }
}

export let actionsCreatorFollow = (id) => {
   return {
      type: 'FOLLOW',
      id: id,
   }
}
export let actionsCreatorUnfollow = (id) => {
   return {
      type: 'UNFOLLOW',
      id: id,
   }
}
export let actionsCreatorSetUsers = (users) => {
   return {
      type: 'SET-USERS',
      users: users,
   }
}
export let actionsCreatorSetPage = (page) => {
   return {
      type: 'SET-PAGE',
      page: page,
   }
}
export let actionsCreatorSetTotalCount = (number) => {
   return {
      type: 'SET-TOTAL-COUNT',
      totalCount: number,
   }
}


export default USERS_REDUCER;