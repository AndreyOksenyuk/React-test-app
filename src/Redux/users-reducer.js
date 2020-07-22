const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const IS_FETCHING = 'IS_FETCHING'

let initialState = {
   users: [],
   numberOfPages: 1,
   numberOfUsers: 6,
   totalUsersCount: 0,
   isFetching: false,
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


export default USERS_REDUCER;