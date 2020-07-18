import { connect } from 'react-redux';
import ListDialogs from '../ListDialogs/ListDialogs';

let mapStateToProps = (state) => {
   return {
      dialogs: state.messagePage.dialogs,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {

   }
}
const ListDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(ListDialogs)

export default ListDialogsContainer;
