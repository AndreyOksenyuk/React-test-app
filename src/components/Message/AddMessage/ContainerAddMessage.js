import {actionCreatorAddMessage, actionCreatorChangeMessage} from '../../../Redux/message-reducer'
import AddMessage from '../AddMessage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      value: state.messagePage.addNewMessage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(actionCreatorAddMessage())
         //store.getState().messagePage.addNewMessage = ''
      },
      onchangeMessage: (message) => {
         dispatch(actionCreatorChangeMessage(message))
      }
   }
}
const ContainerAddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default ContainerAddMessage;