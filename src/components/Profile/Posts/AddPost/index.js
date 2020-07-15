import React from 'react';
import s from './AddPost.module.scss'

const AddPost = (props) => {
   let newPost = React.createRef();
   let addPost = function (event) {
      event.preventDefault()
      const post = newPost.current.value;
      if(post)props.addPost(post)
      newPost.current.value = '';
   }
   return (
      <div className = {s.addPost}>
         <form >
            <textarea ref={newPost} type="text"/>
            <button   
               onClick={addPost} 
            >add post
            </button>
         </form>
      </div>
   )
}

export default AddPost;

