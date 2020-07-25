import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {authMeThankCreator} from '../../Redux/auth-reducer'

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.authMe()
   }
   render() {
      return (
         <Header {...this.props.data}/>
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
})(HeaderContainer)
