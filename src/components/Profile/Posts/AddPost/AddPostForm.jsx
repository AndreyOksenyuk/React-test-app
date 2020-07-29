import React from 'react';
import { Field, reduxForm } from 'redux-form'
import TextareaPost from '../../../module/AddPostForm';
import { maxLength500 } from '../../../utils/validators/Validator';

const AddPostForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            name='post'
            component={TextareaPost}
            validate={[maxLength500]}
            type="text"
         />
         <button>add post</button>
      </form>
   );
}

const AddPostReduxForm = reduxForm({
   form: 'addPostProfile'
})(AddPostForm)

export default AddPostReduxForm;


