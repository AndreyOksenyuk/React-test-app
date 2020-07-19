const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
   users: [],
   text: 'Show more',
}

let USERS_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD-USER-TEXT':
         let text = "Users"
         if(state.text === text){
            return {
               ...state,
               text: 'Show more'
            }
         }
         return {
            ...state,
            text: text,
         };
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

export let actionsCreatorAddUserText = () => {
   return {
      type: 'ADD-USER-TEXT'
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