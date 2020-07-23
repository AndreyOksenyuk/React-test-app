import React from 'react';
import s from './Profile.module.scss'
import AddPostContainer from './Posts/AddPost/AddPostContainer';
import User from './User/User';
import MapPostContainer from './Posts/MapPosts/MapPostContainer';
import img from '../../assets/Image/portfolio-01.jpg'

const Profile = (props) => {

   return (
      
      <div className={s.profile}>
         <div>
            <img src={img} alt="img" className={s.topImg}/>
         </div>  
         <User 
            {...props.User} 
            follow={props.follow}
            unfollow={props.unfollow}
            followedUser={props.followedUser}
            text={props.text}
         />

         <div className={s.posts}>
            <AddPostContainer />
            <MapPostContainer />
         </div>
      </div>
   )
}


export default Profile;