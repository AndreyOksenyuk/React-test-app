import React from 'react';
import s from './Post.module.scss'
import img from '../../../assets/Image/ava.jpg'
import 'font-awesome/css/font-awesome.min.css';

const Posts = (props) => { 

   let onLike = function () {
      props.setLike(props.index)
   }
   let onDisLike = function () {
      props.setDisLike(props.index)
   }

   return (
      <div className={s.Posts}>
         <div className={s.post}>         
            <img src={img} alt="ava"/>
            <i>{props.posts.user}</i>
         </div>
         <p>{props.posts.message}</p>

         <div className={s.likeAndDisLike}>
            <div 
               className={props.posts.like.status ? s.likeActive : s.noActiv}
               onClick={onLike}
            >
               <div className="fa fa-thumbs-up" aria-hidden="true">
                  <span>{props.posts.like.count}</span>
               </div>
            </div>

            <div 
               className={props.posts.disLike.status ? s.likeActive : s.noActiv}
               onClick={onDisLike}
            >
               <div className="fa fa-thumbs-down" aria-hidden="true">
                  <span>{props.posts.disLike.count}</span>
               </div> 
            </div>
         </div>
      </div>

   )
}

export default Posts;