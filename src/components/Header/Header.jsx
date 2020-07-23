import React from 'react';
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={s.header}>
			{!props.login
				? <NavLink to='/login' className={s.loginLink}>Login</NavLink>
				: <p className={s.login}>{props.login}</p>
     		}

		</header>
	)
}

export default Header;