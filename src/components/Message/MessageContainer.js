import React, { Component } from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class MessageContainer extends Component {
   render() {
      if (!this.props.authorization) return <Redirect to='/login' />
      return <Message />
   }
}

const mapStateToProps = (state) => {
   return {
      authorization: state.auth.login,
   }
}

export default connect(mapStateToProps, {

})(MessageContainer)

