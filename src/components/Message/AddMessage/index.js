import React from 'react';
import './AddMessage.scss'

const AddMessage = (props) => {
   let textarea = React.createRef();

      let addMessage = function(event) {
         event.preventDefault()
         if (textarea.current.value) {
            props.addMessage()
         }

      }

      let onchangeMessage = function() {
         let message = textarea.current.value;
         props.onchangeMessage(message)
      }

   return (
      <div className="addMessage">
         <form>
            <textarea 
               name="addMessage" 
               ref={textarea}
               onChange={onchangeMessage}
               value={props.value}
            ></textarea>
            <button onClick={addMessage}>add message</button>
         </form>
      </div>
   )
      
}

export default AddMessage;