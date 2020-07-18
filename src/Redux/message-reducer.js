const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'

let initialState = {
   dialogs: [{
            id: 1,
            user: 'Andrey',
            avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
         },
         {
            id: 2,
            user: 'Sergey',
            avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
         },
         {
            id: 3,
            user: 'Dinis',
            avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
         },
         {
            id: 4,
            user: 'Max',
            avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
         },
         {
            id: 5,
            user: 'Habib',
            avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
         },
         {
            id: 6,
            user: 'Dimon',
            avatar: 'https://yt3.ggpht.com/a/AATXAJyqgMlsfcgmkNqMvaQAY4leVcr888ItH7dvxg=s900-c-k-c0xffffffff-no-rj-mo',
         },
      ],

      addNewMessage: '',
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
   if (action.type === ADD_NEW_MESSAGE) {
       let message = {
          id: Date.parse(new Date().toString()),
          message: state.addNewMessage
       }
       state.message.push(message)
    } 
    else if (action.type === CHANGE_NEW_MESSAGE) {
       state.addNewMessage = action.message;
    }

   return state
}

export let actionCreatorAddMessage = () => ({
   type: ADD_NEW_MESSAGE,
})
export let actionCreatorChangeMessage = (message) => ({
   type: CHANGE_NEW_MESSAGE,
   message: message,
})


export default MESSAGE_REDUCER;