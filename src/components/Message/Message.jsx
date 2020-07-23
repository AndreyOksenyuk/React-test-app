import React from 'react';
import s from './Message.module.scss';
import ContainerAddMessage from './AddMessage/ContainerAddMessage';
import ListDialogsContainer from './Dialog/ListDialogs/ListDialogsContainer';
import DialogMessageContainer from './Dialog/DialogMessage/DialogMessageContainer';

const Message = (props) => {
   return(
      <div className={s.messages}>
      <ListDialogsContainer />
         <div className={s.dialog}>
            <DialogMessageContainer />
            <ContainerAddMessage />
         </div>
      </div>
   )   
}
export default Message;