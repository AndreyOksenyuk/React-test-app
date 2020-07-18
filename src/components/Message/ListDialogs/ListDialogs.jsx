import React from 'react';
import Dialogs from '../Dialog/Dialogs'

const ListDialogs = (props) => {
   return (
      <div>
         {props.dialogs.map(dialog => {
            return <Dialogs dialog={dialog} key={dialog.id}/>
         })}
      </div>
   )
}

export default ListDialogs;