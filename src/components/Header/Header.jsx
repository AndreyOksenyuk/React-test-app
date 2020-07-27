import React from 'react';
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/Image/ava.jpg'

const Header = (props) => {
	return (
		<header className={s.header}>
		<div className={s.login}>
			{!props.login
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