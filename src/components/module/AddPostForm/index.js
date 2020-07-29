import React from 'react';
import style from './AddMessageForm.module.scss'

const TextareaPost = ({input, meta, ...props}) => {
   return (
      <div className={style.form}>
         <textarea {...input} {...props} className={meta.valid ? style.textarea : style.noValid}/>
         {
            !meta.valid &&
             <p>{meta.error}</p>
         }
      </div>
   );
}

export default TextareaPost;
