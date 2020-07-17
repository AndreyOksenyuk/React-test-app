import React from 'react';
import {actionCreatorAddMessage, actionCreatorChangeMessage} from '../../../Redux/message-reducer'
import AddMessage from '../AddMessage';

const ContainerAddMessage = (props) => {

      let addMessage = function() {
            props.store.dispatch(actionCreatorAddMessage())
            props.store.getState().messagePage.addNewMessage = '' 
      }

      let onchangeMessage = function(message) {
         props.store.dispatch(actionCreatorChangeMessage(message))
      }

   return (
      <AddMessage 
         addMessage={addMessage} 
         onchangeMessage={onchangeMessage}
         value={props.store.getState().messagePage.addNewMessage}
      />
   )
      
}

export default ContainerAddMessage;