import { connect } from 'react-redux';
import DialogMessage from './DialogMessage';

let mapStateToProps = (state) => {
   return {
      message: state.messagePage.message,
   }
}

const DialogMessageContainer = connect(mapStateToProps)(DialogMessage)

export default DialogMessageContainer;
