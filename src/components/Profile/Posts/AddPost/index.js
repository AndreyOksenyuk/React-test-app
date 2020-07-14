import React from 'react';
import s from './AddPost.module.scss'

const AddPost = (props) => {
   return (
      <div className = {s.addPost}>
         <form >
            <textarea type="text"/>
            <button 
               type="button"  
               onClick={() => console.log('addPost')} 
            >add post
            </button>
         </form>
      </div>
   )
}

export default AddPost;

