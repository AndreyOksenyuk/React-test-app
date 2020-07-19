import React from 'react';
import UserCard from './UserCard/UserCard';
import style from './Users.module.scss';
import * as axios from 'axios';

export const Users = (props) => { 
   
   if (props.users.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => props.setUsers(response.data.items))
   }
 


   return ( 
      <div className={style.UsersPage}>
         <h1>{props.text}</h1>
         <UserCard 
            users={props.users}
            follow={props.follow}
            unfollow={props.unfollow}
         />
         <button onClick={props.onClickUser} className={style.btnShoeMore}>Show more</button>
      </div>
   )
}

export default Users;
