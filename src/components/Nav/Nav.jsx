import React from 'react';
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () =>  {
   return (
      <nav className={s.nav}>
         <ul>
            <NavLink teg="li" to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/message" activeClassName={s.active}>Message</NavLink>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            <NavLink to="/setting" activeClassName={s.active}>Settings</NavLink>
         </ul>
      </nav>
   )
}

export default Nav;