import React from 'react';
import s from './AddPost.module.scss'

const AddPost = (props) => {
   let newPost = React.createRef();
   let addPosts = function (event) {
      event.preventDefault()
      const post = newPost.current.value;
      if(post)props.addPost()
      props.newPostFun("")
   }
   let changePost = function() {
      let post = newPost.current.value;
      props.newPostFun(post)
   }
   return (
      <div className = {s.addPost}>
         <form>
            <textarea 
               ref={newPost} 
               type="text" 
               value={props.newPostText}
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

