import React from 'react';
import './AddMessage.scss'
import {actionCreatorAddMessage, actionCreatorChangeMessage} from '../../../Store'

const AddMessage = (props) => {
   let textarea = React.createRef();

      let addMessage = function(event) {
         event.preventDefault()
         if (textarea.current.value) {
            props.dispatch(actionCreatorAddMessage())
            props.state.addNewMessage = '' 
         }

      }

      let onchangeMessage = function() {
         let message = textarea.current.value;
         props.dispatch(actionCreatorChangeMessage(message))
      }

   return (
      <div className="addMessage">
         <form>
            <textarea 
               name="addMessage" 
               ref={textarea}
               onChange={onchangeMessage}
               value={props.state.addNewMessage}
            ></textarea>
            <button onClick={addMessage}>add message</button>
         </form>
      </div>
   )
      
}

export default AddMessage;