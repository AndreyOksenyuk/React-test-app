import React from 'react';
import img from '../../../../assets/Image/ava.jpg'
import AddAvatarSVG from '../../../module/SVG/AddAvatar';

const UserAvatar = React.memo (props => {
   
   let onMyPhoto = (e) => {
      props.saveMyPhotoTC(e.target.files[0])
   }

   return (
      <div className='MyPhotoWrapper'>
         {
            !props.photoLarge
               ? <img src={img} alt="avatar" className="MyAvatar" />
               : <img src={props.photoLarge} alt="avatar" className="MyAvatar" />
         }
         <input type="file" id="inputPhoto" onChange={onMyPhoto} />
         <label htmlFor="inputPhoto"><AddAvatarSVG /></label>

      </div>
   );
})

export default UserAvatar;
