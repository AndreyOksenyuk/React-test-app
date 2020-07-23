import React from 'react';
import s from './Dialog.module.scss'
import { NavLink } from 'react-router-dom';
import avatar from '../../../../../assets/Image/ava.jpg'

const Dialogs = ({dialog}) => {
   return (
         <NavLink to = {'/message/'+ dialog.id} className={s.dialog} activeClassName={s.active}>
            <div className={s.listItem}>
               <img src={avatar} alt="ava"/>
               <p>{dialog.user}</p>
            </div>
         </NavLink>
   )
}

export default Dialogs;