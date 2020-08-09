import React from 'react';
import style from './UserInformData.module.scss'
import UserSocial from './UserSocial';

const UserInformData = (props) => {

   return (
      <div className={style.UserInform__data}>
         <div className={style.UserInform__data_inner}>
            <b>Email:</b>
            {props.email
               ? <a href={`mailto:${props.email}`}>{props.email}</a>
               : <i>Emeil не указан</i>
            }
         </div>

         <div className={style.UserInform__data_inner}>
            <b>Ищу работу: </b>
            <p>{props.user.lookingForAJob ? 'ДА' : 'Нет'}</p>
         </div>
         <div className={style.UserInform__data_inner}>
            <b>Умения: </b>
            <p>{props.user.lookingForAJobDescription ? props.user.lookingForAJobDescription : <i>Нет данных</i>}</p>
         </div>
         <div className={style.UserInform__data_inner}>
            <b>Обо мне:</b>
            <p>{props.user.aboutMe ? props.user.aboutMe : <i>нет данных</i>}</p>
         </div>
         <div className={style.UserSocial}>
            <strong>Контакты:</strong>
            {props.user.contacts ? Object.keys(props.user.contacts).map(key => {
               return <UserSocial key={key} keyContacts={key} valueContacts={props.user.contacts[key]} />
            })
               : <i> Загрузка...</i>
            }
         </div>
      </div>
   );
}

export default UserInformData;
