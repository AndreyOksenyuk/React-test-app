import React from 'react';
import { Field, reduxForm } from 'redux-form'

const AddPostForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            name='post'
            component='textarea'
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


