import React from 'react';
import s from '../Dialog.module.scss'


const DialogMessage = (props) => {
   return (
      <div className={s.dialog_inner}>
         {props.message.map(m => {
            return <p key={m.id}> {m.message} </p>
         })}
      </div>
      
   )
}

export default DialogMessage;