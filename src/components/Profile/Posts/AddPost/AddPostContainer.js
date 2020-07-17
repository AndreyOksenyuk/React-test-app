import React from 'react';
import {actionCreatorAddPost, actionCreatorChangePost} from '../../../../Redux/profile-reducer'
import AddPost from '../AddPost';


const AddPostContainer = (props) => {
   
   let state = props.store.getState();
   
   let addPost = function () {
         props.store.dispatch(actionCreatorAddPost())
         state.profilePage.newPostText = ''
   };

   let changePost = function(post) {
      props.store.dispatch(actionCreatorChangePost(post))
      
   }
   
   return (
      <AddPost 
         addPost={addPost} 
         changePost={changePost}
         value={state.profilePage.newPostText} 
      />
   )
}

export default AddPostContainer;

