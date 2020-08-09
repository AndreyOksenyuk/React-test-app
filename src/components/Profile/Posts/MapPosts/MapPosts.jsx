import React from 'react';
import Posts from '../Posts.jsx';
import style from '../Post.module.scss'

const MapPost = (props) => {
   return (
      <div className={style.MapPosts}>
         {
            props.posts.map((post, index) => {
               return <Posts 
                        key={post.id} 
                        posts={post} 
                        setLike={props.setLike}
                        setDisLike={props.setDisLike}
                        index={index}
                     />
            })
         }
         
      </div>

   )
}

export default MapPost;