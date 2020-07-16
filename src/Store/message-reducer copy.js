const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'

let  MESSAGE_REDUCER = (action, state) => {
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

export default MESSAGE_REDUCER;