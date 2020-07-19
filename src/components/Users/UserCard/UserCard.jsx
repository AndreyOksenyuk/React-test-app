import React from 'react';
import s from './UserCard.module.scss';
import avatar from '../../../static/Image/ava.jpg'

const UserCard = (props) => {
   return (
      <div>
         {props.users.map(e => {
      return (
         <div key={e.id} className={s.user}>
            <img 
               src = {e.photos.small != null ? e.photos.small : avatar}
               alt="avatar" 
               className={s.avatar}/>
            <div className={s.user__content}>
            <h2>{e.name}</h2>
               <p>{e.status}</p>
               <div className={s.locations}>
                  {/* <i>{e.location.city}</i>
                  <i>{e.location.country}</i> */}
               </div>
            </div>
               {e.followed
                  ? <button onClick={() => props.follow(e.id)} className={s.btnFollow}>Подписаться</button> 
                  : <button onClick={() => props.unfollow(e.id)} className={s.btnOnFollow}>отписаться</button>
               }


         </div>
      )
   })}
      </div>
   );
}

export default UserCard;
