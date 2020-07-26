import React from 'react';
import s from './User.module.scss'
import img from '../../../assets/Image/ava.jpg'
import Preloader from '../../module/preloader';
import SubscribeBtnContainer from '../../module/SubscribeButton/SubscribeBtnContainer'

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
               
               <div className = {s.followedBtn} onClick = {() => props.FollowToggle()} >
               <SubscribeBtnContainer 
                  id={props.userId}
                  userFollowed={props.followedUser}
               />
               </div>
               <h2>{props.fullName}</h2>
               {
                  props.userStatus ? <i>{props.userStatus}</i>
                  : <i>без статуса</i>
               }
                  
            </div>
         }
      </div>
   )
}

export default User;