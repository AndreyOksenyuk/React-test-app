import React from 'react';
import s from './Message.module.scss'
import Dialogs from './Dialog/Dialogs';
import DialogMessage from './Dialog/DialogMessage';
import AddMessage from './AddMessage';

const Message = (props) => {
   return (
      <div className={s.messages}>
         <div className={s.listDialogs}>
            {props.state.messagePage.dialogs.map(dialog => {
               return <Dialogs dialog={dialog} key={dialog.id}/>
            })}
         </div>

         <div className={s.dialog}>
            <DialogMessage state={props.state}/>
            <AddMessage />
         </div>

      </div>

   )
}

export default Message;