import React from 'react';
import s from './Profile.module.scss'
import User from './User/User';
import img from '../../assets/Image/ProfileHeader.jpg'
import Preloader from '../module/preloader';

const Profile = React.memo(props => {
   return (
      <div className={s.profile}>
         <img src={img} alt="img" className={s.topImg} />
         {props.isPutData
            ? <Preloader />
            : <User
               {...props.User}
               followedUser={props.followedUser}
               FollowToggle={props.FollowToggle}
               userStatus={props.userStatus}
               authorization={props.authorization}
               user={props.User}
            />
         }
      </div>
   )
});

export default Profile;