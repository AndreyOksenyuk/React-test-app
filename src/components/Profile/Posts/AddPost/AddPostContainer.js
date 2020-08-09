import {actionCreatorAddPost, actionCreatorChangePost} from '../../../../Redux/profile-reducer'
import AddPost from './AddPost';
import { connect } from 'react-redux';
import { reset } from 'redux-form'

let mapStateToProps = (state) => ({
   postsLength: state.profilePage.posts.length
})

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (post) => {
         dispatch(actionCreatorAddPost(post))
         dispatch(reset('addPostProfile'))
         
      },
      changePost: (post) => {
         dispatch(actionCreatorChangePost(post))
      }
   }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer;

