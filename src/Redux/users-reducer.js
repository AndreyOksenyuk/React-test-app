const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
   users: [],
}

let USERS_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: 
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id ) {
                  return {...e, followed: false}
               }
               return e
            })
         }                
      case UNFOLLOW: 
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id ) {
                  return {...e, followed: true}
               }
               return e
            })
         };
      case SET_USERS:
         return {
            ...state,
            users: action.users
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


export default USERS_REDUCER;