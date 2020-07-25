import React from 'react';
import s from './UserCard.module.scss';
import avatar from '../../../assets/Image/ava.jpg'
import { NavLink } from 'react-router-dom';
import SubscribeBtnContainer from '../../module/SubscribeButton/SubscribeBtnContainer'

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
               <SubscribeBtnContainer 
                     id={e.id}
                     userFollowed={e.followed}
                  />
            </div>
         )
   })}
      </div>
   );
}

export default UserCard;
