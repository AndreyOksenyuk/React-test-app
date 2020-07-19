
let initialState = {
   users: [
      {
         id: 1,
         name: 'Pedro',
         status: 'Hello!!! I am a boss',
         location: {
            country: "Ukraine",
            city: 'Kiev',
         },
         follow: true,
         avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
      },
      {
         id: 2,
         name: 'Ivan',
         status: 'Hello!!! I am a boss',
         location: {
            country: "Ukraine",
            city: 'Kiev',
         },
         follow: false,
         avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
      },
      {
         id: 3,
         name: 'Andrey',
         status: 'Hello!!! I am a boss',
         location: {
            country: "Ukraine",
            city: 'Apostolovo',
         },
         follow: true,
         avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
      },
      {
         id: 4,
         name: 'Sergey',
         status: 'Super star :)',
         location: {
            country: "Ukraine",
            city: 'Dnepro',
         },
         follow: true,
         avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
      },
      {
         id: 5,
         name: 'Valera',
         status: 'Super star :)',
         location: {
            country: "Ukraine",
            city: 'Dnepro',
         },
         follow: false,
         avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
      },
   ],
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
      case 'FOLLOW': 
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id ) {
                  return {...e, follow: false}
               }
               return e
            })
         }                
      case 'UNFOLLOW': 
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id ) {
                  return {...e, follow: true}
               }
               return e
            })
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
export let actionsCreatorFollow = () => {
   return {
      type: 'FOLLOW',
   }
}
export let actionsCreatorUnfollow = () => {
   return {
      type: 'UNFOLLOW',
   }
}


export default USERS_REDUCER;