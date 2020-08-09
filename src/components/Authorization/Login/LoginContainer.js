import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import {loginThankCreator, setCaptchaUrl} from '../../../Redux/auth-reducer';
import { authAPI } from '../../../api';

const LoginContainer = (props) => {
   const onChangeCaptcha = () => {
      authAPI.getCaptchaURL().then(response => {
         props.setCaptchaUrl(response.data.url)
      })
   }
   return <Login {...props} onChangeCaptcha={onChangeCaptcha}/>; 
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      captchaURL: state.auth.captchaURL,
      disableSubmitBtn: state.auth.disableSubmitBtn,
   }
}

export default connect(mapStateToProps, {
   loginThankCreator, setCaptchaUrl
})(LoginContainer)
