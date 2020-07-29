import {actionCreatorAddMessage} from '../../../Redux/message-reducer'
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (message) => {
         dispatch(actionCreatorAddMessage(message))
      },
   }
}
const ContainerAddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default ContainerAddMessage;