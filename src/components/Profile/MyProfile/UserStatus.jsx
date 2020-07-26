import React, { useState } from 'react';
import './MyProfile.scss'

const UserStatus = (props) => {
   let [edidMode, setEdidNMode] = useState(true)
   return (
      <div>
      {edidMode 
         ? <div className = 'MyStatus' >
               <h5>My status</h5>
               <i 
                  className="fa fa-pencil-square-o" aria-hidden="true" 
                  onClick={() => setEdidNMode(false)}
               ></i>
            </div>
         :  <input
               type="text" 
               autoFocus={true} 
               onBlur={() => setEdidNMode(true)} 

            />
      }
         
         
      </div>
   );
}

export default UserStatus;
