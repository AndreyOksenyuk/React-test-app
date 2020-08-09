import React from 'react';
import { Field, reduxForm } from 'redux-form'
import TextareaPost from '../../../module/AddPostForm';
import { requiredPost } from '../../../utils/validators/Validator';
import style from './AddPost.module.scss';

const AddPostForm = (props) => {

   return (
      <div className={style.formAddPost_wrapper}>
         <div className={style.wallOfposts}>
            <span>Стена { props.postsLength } записей</span>
         </div>
      <form onSubmit={props.handleSubmit} >
         <Field
            name='post'
            component={TextareaPost}
               validate={[requiredPost]}
            type="text"
         />
         <button className='Button'>add post</button>
      </form>
      </div>

   );
}

const AddPostReduxForm = reduxForm({
   form: 'addPostProfile'
})(AddPostForm)

export default AddPostReduxForm;


