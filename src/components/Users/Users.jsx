import React from 'react';
import UserCard from './UserCard/UserCard';
import style from './Users.module.scss';
import Preloader from '../preloader';


let Users = (props) => {
   let pagination = Math.ceil(props.totalUsersCount /props.numberOfUsers);
   let pages = []
   for (let i = 1; i <= pagination; i++) {
      pages.push(i)
   }
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
            
            <div className={style.pagination}>
               {pages.map(e => {
                  return <span
                     key={e}
                     className={props.numberOfPages === e
                        ? style.pagination__pageActive
                        : style.pagination__page
                     }
                     onClick={() => { props.onSetPage(e) }}
                  >{e}</span>
               })}
            </div>
         </div>
      )
   }

   export default Users;
