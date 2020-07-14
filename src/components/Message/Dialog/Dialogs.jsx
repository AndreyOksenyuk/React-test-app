import React from 'react';
import s from './Dialog.module.scss'
import { NavLink } from 'react-router-dom';


const Dialogs = ({dialog}) => {
   return (
         <NavLink to = {'/message/'+ dialog.id} activeClassName={s.active}>
            <div className={s.listItem}>
               <img src={dialog.avatar} alt="ava"/>
               <p>{dialog.user}</p>
            </div>
         </NavLink>
   )
}

export default Dialogs;