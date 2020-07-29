import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import {loginThankCreator} from '../../../Redux/auth-reducer';

const LoginContainer = (props) => {
   return <Login {...props}/>; 
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
   }
}

export default connect(mapStateToProps, {
   loginThankCreator
})(LoginContainer)
