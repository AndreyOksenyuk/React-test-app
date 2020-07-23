import React from 'react';
import UserCard from './UserCard/UserCard';
import style from './Users.module.scss';
import Preloader from '../preloader';
import Pagination from './Pagination/Pagination';


let Users = (props) => {
      return (
         <div className={style.UsersPage}>
            {props.fetching
               ? <Preloader />
               : <UserCard
                     users={props.users}
                     follow={props.follow}
                     unfollow={props.unfollow}
                  />
            }
            
            <Pagination 
               onSetPage={props.onSetPage} 
               numberOfPages={props.numberOfPages}
               totalUsersCount={props.totalUsersCount}
               numberOfUsers={props.numberOfUsers}
               portitionSize={props.portitionSize}
            />
         </div>
      )
   }

   export default Users;
