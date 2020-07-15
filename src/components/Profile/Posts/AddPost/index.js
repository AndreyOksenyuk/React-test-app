import React from 'react';
import s from './AddPost.module.scss'

const AddPost = (props) => {
   let newPost = React.createRef();
   let addPosts = function (event) {
      event.preventDefault()
      const post = newPost.current.value;
      if(post){
         props.dispatch({
            type: 'ADD-POST',
         })
         props.state.profilePage.newPostText = ''
      } 
   };

   let changePost = function() {
      let post = newPost.current.value;
      props.dispatch({
         type: 'NEW-POST',
         text: post
      })
   }
   
   return (
      <div className = {s.addPost}>
         <form>
            <textarea 
               ref={newPost} 
               type="text" 
               value={props.state.profilePage.newPostText}
               onChange={changePost}
            />
            <button 
               type="submit"  
               onClick={addPosts} 
            >add post
            </button>
         </form>
      </div>
   )
}

export default AddPost;

