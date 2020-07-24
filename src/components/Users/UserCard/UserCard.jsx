import React from 'react';
import s from './UserCard.module.scss';
import avatar from '../../../assets/Image/ava.jpg'
import { NavLink } from 'react-router-dom';
import FolowAndUnfolow from './FolowAndUnfolow';

const UserCard = (props) => {
   return (
      <div>
         {props.users.map(e => {
      return (
         <div key={e.id} className={s.user}>
         <NavLink to={"/profile/" + e.id} >
            <img 
               src = {e.photos.small != null ? e.photos.small : avatar}
               alt="avatar" 
               className={s.avatar}
            />
         </NavLink>

            <div className={s.user__content}>
            <h2>{e.name}</h2>
               <p>{e.status}</p>
            </div>

            <FolowAndUnfolow 
               follow={props.follow}
               unfollow={props.unfollow}
               id={e.id}
               userFollowed={e.followed}
               disableSubscribeBtn={props.disableSubscribeBtn}
               disableBtn={props.disableBtn}
            />



         </div>
      )
   })}
      </div>
   );
}

export default UserCard;
