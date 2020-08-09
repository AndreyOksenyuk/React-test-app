import {actionCreatorAddMessage} from '../../../Redux/message-reducer'
import AddMessage from './AddMessage';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

let mapStateToProps = (state) => {
   return {
      
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (message) => {
         dispatch(actionCreatorAddMessage(message))
         dispatch(reset('FormAddMessage'))
      },
   }
}
const ContainerAddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default ContainerAddMessage;