import React from 'react';
import s from './Message.module.scss'
import Dialogs from './Dialog/Dialogs';
import DialogMessage from './Dialog/DialogMessage';
import ContainerAddMessage from './AddMessage/ContainerAddMessage';

const Message = (props) => {
   return (
      <div className={s.messages}>
         <div className={s.listDialogs}>
            {props.store.getState().messagePage.dialogs.map(dialog => {
               return <Dialogs dialog={dialog} key={dialog.id}/>
            })}
         </div>

         <div className={s.dialog}>
            <DialogMessage state={props.store.getState()}/>
            <ContainerAddMessage 
               store={props.store}
            />
         </div>

      </div>

   )
}

export default Message;