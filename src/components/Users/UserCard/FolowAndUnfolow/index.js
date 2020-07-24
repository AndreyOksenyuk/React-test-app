import React from 'react'
import s from '../UserCard.module.scss';
import {deleteFollow, postFollow} from '../../../../api'

const FolowAndUnfolow = (props) => {
   let disable = props.disableSubscribeBtn.some(e => e === props.id)
   return (
      <>
         {props.userFollowed
            ? <button
               disabled = {disable}
               className={s.btnOnFollow}
               onClick={() => {
                  props.disableBtn(props.id, true)
                  deleteFollow(props.id).then(data => {
                        if (data.resultCode === 0) {
                              props.unfollow(props.id)
                        }
                        props.disableBtn(props.id, false)
                     })
                  
               }}
            >{disable ? <i className="fa fa-spinner" aria-hidden="true"></i> : 'отписаться'}</button>

            : <button
              disabled = {disable}
               className={s.btnFollow}
               
               onClick={() => {
                     props.disableBtn(props.id, true)
                     postFollow(props.id).then(data => {
                        if(data.resultCode === 0){
                           props.follow(props.id)
                        }
                        props.disableBtn(props.id, false)
                     })
                     
               }}
            >{disable ? <i className="fa fa-spinner" aria-hidden="true"></i> : 'Подписаться'}</button>
         }
      </>
   )
}

export default FolowAndUnfolow;
