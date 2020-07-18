import React from 'react';
import Posts from '../Posts.jsx';

const MapPost = (props) => {
   return (
      <div className="MapPosts">
         {
            props.posts.map((post) => {
               return <Posts key={post.id} posts={post} />
            })
         }
         
      </div>

   )
}

export default MapPost;