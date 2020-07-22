import React from 'react';
import s from './User.module.css'
import img from '../../../assets/Image/ava.jpg'
import Preloader from '../../preloader';

const User = (props) => {
   
   return (
      <div className={s.user}>
         {!props.userId
            ? <Preloader />
            : <div className="">
               {
                  !{ ...props.photos }.small
                     ? <img src={img} alt="avatar" className={s.avatar} />
                     : <img src={{ ...props.photos }.small} alt="avatar" className={s.avatar} />
               }
               <h2>{props.fullName}</h2>
               <p>{props.aboutMe}</p>
            </div>
         }
      </div>
   )
}

export default User;