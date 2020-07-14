import React from 'react';
import s from './User.module.css'
import img from '../../../static/Image/ava.jpg'

const User = () => {
   return (
      <div className={s.user}>
         <img src={img} alt="avatar" className={s.avatar}/>
      </div>
   )
}

export default User;