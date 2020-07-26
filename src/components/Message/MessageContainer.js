import React, { Component } from 'react';
import Message from './Message';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class MessageContainer extends Component {
   render() {
      return <Message />
   }
}
export default withAuthRedirect(MessageContainer)

