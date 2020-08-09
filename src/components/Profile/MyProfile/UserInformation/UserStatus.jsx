import React, { useState } from 'react';
import '../MyProfile.scss'
import { userAPI } from '../../../../api';

const UserStatus = React.memo (props => {
   let input = React.createRef()
   let [edidMode, setEdidMode] = useState(true)
   let setMyStatus = () => {
      setEdidMode(true)
      userAPI.putMyStatus({ status: `${props.myStatus}` })
   }
   let changeMyStatus = () => {
      props.changeValueMyStatus(input.current.value)
   }
   return (
      <>
         {edidMode
            ? <div className='MyStatus' >
               {props.status === null
                  ? <i>без статуса</i>
                  : <h5>{props.myStatus}</h5>
               }
               <i
                  className="fa fa-pencil-square-o" aria-hidden="true"
                  onClick={() => setEdidMode(false)}
               ></i>
            </div>
            : <input
               ref={input}
               type="text"
               value={props.myStatus}
               onChange={() => changeMyStatus()}
               autoFocus={true}
               onBlur={() => setMyStatus()}

            />
         }

      </>
   );
})

export default UserStatus;
