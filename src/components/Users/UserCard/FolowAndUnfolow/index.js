import React from 'react'
import s from '../UserCard.module.scss';
import axios from 'axios';

const FolowAndUnfolow = (props) => {
   return (
      <>
         {props.userFollowed
            ? <button
               className={s.btnOnFollow}
               onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                     withCredentials: true,
                     headers: {
                        'API-KEY': '19d35e01-5453-43df-a4a5-324ffa914553'
                     }

                  }
                  )
                  .then(response => {
                        if (response.data.resultCode === 0) {
                           props.unfollow(props.id)
                        }
                     })
                  

               }}
            >отписаться</button>

            : <button
               className={s.btnFollow}
               onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{},{
                        withCredentials: true,
                        headers: {
                           'API-KEY': '19d35e01-5453-43df-a4a5-324ffa914553'
                        }

                     }
                  )
                     .then(response => {
                        if(response.data.resultCode === 0){
                           props.follow(props.id)
                        }
                     })

               }}
            >Подписаться</button>
         }
      </>
   )
}

export default FolowAndUnfolow;
