import React from 'react';
import {actionCreatorAddMessage, actionCreatorChangeMessage} from '../../../Redux/message-reducer'
import AddMessage from '../AddMessage';
import StoreContext from '../../../StoreContext';

const ContainerAddMessage = (props) => {
   return (
      <StoreContext.Consumer>
         {store => {
            let addMessage = function() {
                  store.dispatch(actionCreatorAddMessage())
                  store.getState().messagePage.addNewMessage = '' 
            }

            let onchangeMessage = function(message) {
               store.dispatch(actionCreatorChangeMessage(message))
            }
            return (
               <AddMessage 
                  addMessage={addMessage} 
                  onchangeMessage={onchangeMessage}
                  value={store.getState().messagePage.addNewMessage}
               />
            )
         }}
      </StoreContext.Consumer>
   )   
}

export default ContainerAddMessage;