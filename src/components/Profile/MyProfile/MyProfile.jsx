import React from 'react';
import './MyProfile.scss';
import AddPostContainer from '../Posts/AddPost/AddPostContainer';
import MapPostContainer from '../Posts/MapPosts/MapPostContainer';
import img from '../../../assets/Image/ava.jpg'
import UserStatus from './UserStatus';

const MyProfile = (props) => {
   return (
      <div className="MyProfile">
         <div className="MyProfile__user">
            <div className="">
               {
                  !{ ...props.user.photos }.small
                     ? <img src={img} alt="avatar"  className="MyAvatar"/>
                     : <img src={{ ...props.photos }.small} alt="avatar" />
               }
               <h5>{props.user.fullName}</h5>
               <UserStatus />
               <a href={`mailto:${props.email}`}>{props.email}</a>
            </div>
         </div>
      
         <div className = "MyProfile__posts" >
            <AddPostContainer />
            <MapPostContainer />
         </div>
      </div>
   );
}

export default MyProfile;
