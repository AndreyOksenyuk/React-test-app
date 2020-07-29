import React from 'react';
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/Image/ava.jpg'

const Header = (props) => {
	let Logout = () => {
		props.logout()
	}
	return (
		<header className={s.header}>
		<NavLink to='./login' className={s.logoutBtn} onClick={Logout}>Выйти</NavLink>
		<div className={s.login}>
			{!props.isAuth
				? 	<NavLink to='/login' className={s.login__link}>Login</NavLink>
				: 	<div className={s.login__nik}>
						<NavLink to='/Myprofile'>{props.login}</NavLink>
						<img src={avatar} alt=""/>
					</div>
     		}
		</div>
		</header>
	)
}

export default Header;