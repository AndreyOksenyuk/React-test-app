import React, { Component } from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class MessageContainer extends Component {
   render() {
      return <Message />
   }
}

const mapStateToProps = (state) => {
   return {
      
   }
}

let authRerdirectComponent = withAuthRedirect(MessageContainer)

export default connect(mapStateToProps, {

})(authRerdirectComponent)

