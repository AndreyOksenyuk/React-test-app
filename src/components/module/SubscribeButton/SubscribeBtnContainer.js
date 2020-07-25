import React from 'react';
import SubscribeButton from './SubscribeBtn';
import { connect } from 'react-redux';
import {unfollowThunk, followThunk} from '../../../Redux/users-reducer'

class SubscribeBtnContainer extends React.Component {

   render() {
      return (
         <SubscribeButton {...this.props}/>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      disableSubscribeBtn: state.usersPage.disableSubscribeBtn,
      authorization: state.auth.login,
   }
}

export default connect(mapStateToProps, {
   unfollow: unfollowThunk, 
   follow: followThunk,
})(SubscribeBtnContainer)
