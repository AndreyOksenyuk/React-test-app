const ADD_NEW_MESSAGE:string = 'ADD-NEW-MESSAGE';

type DialogsType = {
   id: number
   user: string
}
type MessageType ={
   id: number
   message: string
}

type InitialStateTypes = {
   dialogs: Array<DialogsType>
   message: Array<MessageType>
}

let initialState:InitialStateTypes = {
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

let  MESSAGE_REDUCER = (state = initialState, action:any):InitialStateTypes => {
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
type ActionCreatorAddMessageType = {
   type: typeof  ADD_NEW_MESSAGE
   message: string
}

export let actionCreatorAddMessage = (message:string):ActionCreatorAddMessageType => ({
   type: ADD_NEW_MESSAGE,
   message,
})


export default MESSAGE_REDUCER;