import React from 'react';
import {actionCreatorAddPost, actionCreatorChangePost} from '../../../../Redux/profile-reducer'
import AddPost from '../AddPost';
import StoreContext from '../../../../StoreContext';


const AddPostContainer = (props) => {
   
   return   <StoreContext.Consumer>
         {store => {
            let state = store.getState(); 
            let addPost = function () {
                  store.dispatch(actionCreatorAddPost())
                  state.profilePage.newPostText = ''
            };

            let changePost = function(post) {
               store.dispatch(actionCreatorChangePost(post))
            }
            return (
               <AddPost 
                  addPost={addPost} 
                  changePost={changePost}
                  value={state.profilePage.newPostText} 
               />
            )
         }}
      </StoreContext.Consumer>
   }

export default AddPostContainer;

