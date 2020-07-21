import { connect } from 'react-redux';
import MapPost from './MapPosts';
import { actionCreatorLike, actionCreatorDisLike } from '../../../../Redux/profile-reducer';

let mapStateToProps = (state) => {
   return {
     posts: state.profilePage.posts,
     text: state.profilePage.text,
   }
   
}
let mapDispatchToProps = (dispatch) => {
   return {
     setLike: (index) => {
       dispatch(actionCreatorLike(index))
     },
     setDisLike: (index) => {
       dispatch(actionCreatorDisLike(index))
     } 
   }
   
}

const MapPostContainer = connect(mapStateToProps, mapDispatchToProps)(MapPost);

export default MapPostContainer;