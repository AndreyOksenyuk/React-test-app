import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {authMeThankCreator, logoutThankCreator} from '../../Redux/auth-reducer'

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.authMe()
   }
   render() {
      return (
         <Header {...this.props.data} logout={this.props.logoutThankCreator}/>
      );
   }
}

let mapStateToProps = (state) =>{
   return {
      data: state.auth,
   }
}

export default connect(mapStateToProps, {
   authMe: authMeThankCreator,
   logoutThankCreator,
})(HeaderContainer)
