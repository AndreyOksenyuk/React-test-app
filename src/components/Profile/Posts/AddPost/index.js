import React from 'react';
import s from './AddPost.module.scss'

const AddPost = (props) => {

   let newPost = React.createRef();

   let onAddPosts = function (event) {
      event.preventDefault()
      const post = newPost.current.value;
      if(post){
         props.addPost()
      } 
   };

   let onChangePost = function() {
      let post = newPost.current.value;
      props.changePost(post)
   }
   
   return (
      <div className = {s.addPost}>
         <form>
            <textarea 
               ref={newPost} 
               type="text" 
               value={props.value}
               onChange={onChangePost}
            />
            <button 
               type="submit"  
               onClick={onAddPosts} 
            >add post
            </button>
         </form>
      </div>
   )
}

export default AddPost;

