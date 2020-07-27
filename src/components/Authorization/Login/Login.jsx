import React from 'react';
import style from './Login.module.scss'
import LoginReduxForm from './LoginForm';
import { postLogin } from '../../../api';

const Login = () => {
   let submitLogin = (value) => {
      postLogin(value.email, value.password, value.rememberMe);
   }
   return (
      <div className={style.Login}>
         <h3>Авторизация</h3>
         <LoginReduxForm onSubmit={submitLogin}/>
      </div>
   );
}

export default Login;
