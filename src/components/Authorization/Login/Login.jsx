import React from 'react';
import style from './Login.module.scss'
import LoginForm from './LoginForm';
import TestAccountData from '../TestAccountData';

const Login = (props) => {
   let submitLogin = (value) => {
      props.loginThankCreator(value.email, value.password, value.rememberMe, value.captcha)
   }

   return (
      <div className={style.Login}>
         <TestAccountData />
         <h3>Авторизация</h3>
         <LoginForm 
            onSubmit={submitLogin} 
            isAuth={props.isAuth} 
            captchaURL={props.captchaURL}
            onChangeCaptcha={props.onChangeCaptcha}
            disableSubmitBtn={props.disableSubmitBtn}
         />
      </div>
   );
}

export default Login;
