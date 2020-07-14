import React from 'react';
import s from './Message.module.scss'
import Dialogs from './Dialog/Dialogs';
import DialogMessage from './Dialog/DialogMessage';

const Message = (props) => {
   return (
      <div className={s.messages}>
         <div className={s.listDialogs}>
            {props.dialogs.map(dialog => {
               return <Dialogs dialog={dialog} key={dialog.id}/>
            })}
         </div>

         <div className={s.dialog}>
            <DialogMessage message={props.message}/>
         </div>
      </div>

   )
}

export default Message;