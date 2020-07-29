import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Textarea from '../../module/AddMessageForm';
import { maxLength500 } from '../../utils/validators/Validator';

const FormAddMessage = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field 
            name="addMessage" 
            component={Textarea}
            validate={[maxLength500]}
         ></Field>
         <button>add message</button>
      </form>
   );
}

let AddMessageReduxForm = reduxForm({
   form: 'FormAddMessage'
})(FormAddMessage)

export default AddMessageReduxForm;
