import React from 'react'
import s from './SubscribeBtn.module.scss';

const SubscribeButton = (props) => {
   let disable = props.disableSubscribeBtn.some(e => e === props.id)
   return (
      <>
         {props.userFollowed
            ? <button
               disabled = {disable}
               className={s.btnOnFollow}
               onClick={() => props.unfollow(props.id)}
            >{disable ? <i className="fa fa-spinner" aria-hidden="true"></i> : 'отписаться'}</button>

            : <button
               disabled = {disable}
               className={s.btnFollow}
               onClick={() => props.follow(props.id)}
            >{disable ? <i className="fa fa-spinner" aria-hidden="true"></i> : 'Подписаться'}</button>
         }
      </>
   )
}

export default SubscribeButton;
