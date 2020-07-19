import React from 'react';
import s from './UserCard.module.scss'

const UserCard = (props) => {
   let followOrUnfollow = () => {
      
   }
   return (
      <div>
         {props.users.map(e => {
      return (
         <div key={e.id} className={s.user}>
            <img src={e.avatar} alt="ava" className={s.avatar}/>
            <div className={s.user__content}>
            <h2>{e.name}</h2>
               <p>{e.status}</p>
               <div className={s.locations}>
                  <i>{e.location.city}</i>
                  <i>{e.location.country}</i>
               </div>
            </div>

            <button 
               className = {s.btnFollow}
               onClick = {followOrUnfollow} 
            >
               {e.follow ? 'Unfollow' : 'Follow'}
            </button>

         </div>
      )
   })}
      </div>
   );
}

export default UserCard;
