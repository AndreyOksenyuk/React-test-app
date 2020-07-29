import React from 'react';
import './AddMessage.scss';
import AddMessageReduxForm from './FormAddMessage';

const AddMessage = (props) => {
let addMessage = (value) =>{
   props.addMessage(value.addMessage)
}

   return (
      <div className="addMessage">
         <AddMessageReduxForm onSubmit={addMessage}/>
      </div>
   )
      
}

export default AddMessage;