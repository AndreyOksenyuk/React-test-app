import React from 'react';
import './AddMessage.scss'

const AddMessage = (props) => {
   let Textarea = React.createRef();
   let addMessage = function(event) {
      event.preventDefault()
      console.log(Textarea.current.value);
   }
   return (
      <div className="addMessage">
         <form>
            <textarea name="addMessage" ref={Textarea}></textarea>
            <button onClick={addMessage}>add message</button>
         </form>
      </div>
   )
      
}

export default AddMessage;