import React from 'react'
import s from './Users.module.scss'
import UserCard from './UserCard/UserCard';

export const Users = (props) => { 
   
   return ( 
      <div className={s.UsersPage}>
         <h1>{props.text}</h1>
         <UserCard 
            users={props.users}
            follow={props.follow}
            unfollow={props.unfollow}
         />
         <button onClick={props.onClickUser} className={s.btnShoeMore}>Show more</button>
      </div>
   )
}

export default Users;
