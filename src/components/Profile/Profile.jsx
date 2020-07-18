import React from 'react';
import s from './Profile.module.scss'
import TopImg from './TopImg';
import AddPostContainer from './Posts/AddPost/AddPostContainer';
import User from './User/User';
import MapPostContainer from './Posts/MapPosts/MapPostContainer';

const Profile = (props) => {
   return (
      <div className={s.profile}>
         <TopImg />

         <User />

         <div className={s.posts}>
            <AddPostContainer />
            <MapPostContainer />
         </div>
      </div>
   )
}


export default Profile;