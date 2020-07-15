import React from 'react';
import s from './Profile.module.scss'
import TopImg from './TopImg';
import Posts from './Posts/Posts';
import AddPost from './Posts/AddPost';
import User from './User/User';


const Profile = (props) => {

   return ( 
   <div className={s.profile}>

      <TopImg/>

      <User/>

      <div className={s.posts}>
         <AddPost addPost={props.addPost} />
            {props.posts.map((post) => {
               return <Posts key={post.id} posts={post} />
            })}
      </div>

   </div>
   )
}

export default Profile;