import {actionCreatorAddPost, actionCreatorChangePost} from '../../../../Redux/profile-reducer'
import AddPost from '../AddPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      value: state.profilePage.newPostText,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(actionCreatorAddPost())
      },
      changePost: (post) => {
         dispatch(actionCreatorChangePost(post))
      }
   }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer;

