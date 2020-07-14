import React from 'react';
import s from './Post.module.scss'
import img from '../../../static/Image/ava.jpg'

const Posts = (props) => {
   return (
      <div className={s.Posts}>
      <i>{props.posts.user}</i>
         <div className={s.post}>
            <img src={img} alt="ava" className={s.img}/>
            <p>{props.posts.message}</p>
         </div>
         <span>Like</span>
      </div>

   )
}

export default Posts;