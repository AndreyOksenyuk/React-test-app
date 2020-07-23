import React from 'react';
import s from './User.module.scss'
import img from '../../../assets/Image/ava.jpg'
import Preloader from '../../preloader';
import FolowAndUnfolow from '../../Users/UserCard/FolowAndUnfolow';

const User = (props) => {

   return (
      <div className={s.user}>
         {!props.userId
            ? <Preloader />
            : <div className={s.user__inner}>
               {
                  !{ ...props.photos }.small
                     ? <img src={img} alt="avatar" className={s.avatar} />
                     : <img src={{ ...props.photos }.small} alt="avatar" className={s.avatar} />
               }
               <div className={s.followedBtn}>
                  <FolowAndUnfolow 
                     follow={props.follow}
                     unfollow={props.unfollow}
                     id={props.userId}
                     userFollowed={props.followedUser}
                  />
               </div>
               <h2>{props.fullName}</h2>
               <p>{props.aboutMe}</p>
            </div>
         }
      </div>
   )
}

export default User;