import React from 'react';
import s from './Dialog.module.scss'


const DialogMessage = ({message}) => {
   return (
      <div className={s.dialog_inner}>
         {message.map(m => {
            return <p key={m.id}> {m.message} </p>
         })}
      </div>
      
   )
}

export default DialogMessage;