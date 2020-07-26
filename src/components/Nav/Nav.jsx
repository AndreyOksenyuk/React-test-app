import React from 'react';
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () =>  {
   return (
      <nav className={s.nav}>
         <ul>
            <NavLink teg="li" to="/Myprofile" activeClassName={s.active}>Моя страница</NavLink>
            <NavLink to="/message" activeClassName={s.active}>Сообщения</NavLink>
            <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
            <NavLink to="/music" activeClassName={s.active}>Музыка</NavLink>
            <NavLink to="/users" activeClassName={s.active}>Пользователи</NavLink>
            <NavLink to="/setting" activeClassName={s.active}>Настройки</NavLink>
         </ul>
      </nav>
   )
}

export default Nav;