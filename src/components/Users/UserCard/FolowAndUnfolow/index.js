import React from 'react'
import s from '../UserCard.module.scss';
import {deleteFollow, postFollow} from '../../../../api'

const FolowAndUnfolow = (props) => {
   return (
      <>
         {props.userFollowed
            ? <button
               className={s.btnOnFollow}
               onClick={() => {
                  deleteFollow(props.id).then(data => {
                        if (data.resultCode === 0) {
                           props.unfollow(props.id)
                        }
                     })
               }}
            >отписаться</button>

            : <button
               className={s.btnFollow}
               onClick={() => {
                     postFollow(props.id).then(data => {
                        if(data.resultCode === 0){
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
