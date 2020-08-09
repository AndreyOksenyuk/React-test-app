import React from 'react';
import s from './Settings.module.scss'


const Setting = (props) => {
   return ( 
   <div className = {s.setting} >
      <h1>{props.text}</h1>
   </div>
   )
}

export default Setting;