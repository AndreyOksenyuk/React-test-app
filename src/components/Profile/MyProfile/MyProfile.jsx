import React from 'react';
import './MyProfile.scss';
import AddPostContainer from '../Posts/AddPost/AddPostContainer';
import MapPostContainer from '../Posts/MapPosts/MapPostContainer';

import UserInfo from './UserInformation/UserInfo';
import UserAvatar from './UserInformation/UserAvatar';

const MyProfile = React.memo(props => {

   return (
      <div className="MyProfile">
         <div className="MyProfile__user">
            <UserAvatar
               photoLarge={{ ...props.user.photos }.large}
               saveMyPhotoTC={props.saveMyPhotoTC}
            />
            <UserInfo
               myStatus={props.myStatus}
               changeValueMyStatus={props.changeValueMyStatus}
               user={props.user}
               email={props.email}
               saveMyDataTC={props.saveMyDataTC}
               isPutData={props.isPutData}
               disableBtn={props.disableBtn}
            />
         </div>

         <div className="MyProfile__posts" >
            <AddPostContainer />
            <MapPostContainer />
         </div>
      </div>
   );
});

export default MyProfile;
