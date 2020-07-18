import React from 'react';
import s from './Message.module.scss'
import Dialogs from './Dialog/Dialogs';
import DialogMessage from './Dialog/DialogMessage';
import ContainerAddMessage from './AddMessage/ContainerAddMessage';
import StoreContext from '../../StoreContext';

const Message = (props) => {
   return <StoreContext.Consumer>
      {store => {
         return(
            <div className={s.messages}>
               <div className={s.listDialogs}>
                  {store.getState().messagePage.dialogs.map(dialog => {
                     return <Dialogs dialog={dialog} key={dialog.id}/>
                  })}
               </div>

               <div className={s.dialog}>
                  <DialogMessage state={store.getState()}/>
                  <ContainerAddMessage />
               </div>
            </div>
         )   
      }}
   </StoreContext.Consumer>

}

export default Message;