import React from 'react';
import s from './AddPost.module.scss'
import AddPostForm from './AddPostForm';

const AddPost = (props) => {  
let onAddPost = (value) => {
   props.addPost(value.post)
   console.log(value.post);
}

   return (
      <div className = {s.addPost}>
         <AddPostForm 
            changePost={props.changePost}
            addPost={props.addPost}
            onSubmit={onAddPost}
         />
      </div>
   )
}

export default AddPost;

