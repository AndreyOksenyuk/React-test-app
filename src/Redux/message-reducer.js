const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
   dialogs: [{
            id: 1,
            user: 'Andrey',
         },
         {
            id: 2,
            user: 'Sergey',
         },
         {
            id: 3,
            user: 'Pedro',
         },
         {
            id: 4,
            user: 'Max',
         },
         {
            id: 5,
            user: 'Ivan',
         },
         {
            id: 6,
            user: 'Dimon',
         },
      ],

      message: [{
            id: 1,
            message: 'Hello!!! It is my first message. How are you?'
         },
         {
            id: 2,
            message: 'Hello! i am ok)'
         },
         {
            id: 3,
            message: 'Hello!!!'
         },
         {
            id: 4,
            message: 'Bye!'
         },
      ],
}

let  MESSAGE_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE:
         let message = {
            id: Date.now(),
            message: action.message
         }
         return{
            ...state,
            message: [...state.message, message],
         }
      default:
         return state;
   } 
}
export let actionCreatorAddMessage = (message) => ({
   type: ADD_NEW_MESSAGE,
   message,
})


export default MESSAGE_REDUCER;