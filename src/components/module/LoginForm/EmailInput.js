import React from 'react';
import style from './LoginForm.module.scss'

const EmailInput = ({input, meta, ...props}) => {
   const dirty = !meta.dirty && meta.touched;
   const error = meta.error && meta.touched
   return (
   <div className={error || dirty ? style.emailError : style.email}>
      <input {...input} {...props}/>
      {error &&
         <p className={style.messageError}>{meta.error}</p>
      }
      {dirty &&
         <p className={style.messageError}>Поле не должно быть пустым</p>
      }
   </div>
   )
}

export default EmailInput;
