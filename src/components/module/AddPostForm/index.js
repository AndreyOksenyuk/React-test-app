import React from 'react';
import style from './AddMessageForm.module.scss'

const TextareaPost = ({input, meta, ...props}) => {
   return (
      <div className={style.form}>
         <p className={style.textError} style={meta.valid ? { opacity: '0' } : { opacity: '1' }}>Добавить запись &#9998;</p>        
         <textarea {...input} {...props} className={style.textarea }/>
      </div>
   );
}

export default TextareaPost;
