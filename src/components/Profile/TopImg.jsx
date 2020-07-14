import React from 'react';
import s from './Profile.module.scss'
import img from '../../static/Image/portfolio-01.jpg'

const TopImg = () => {
   return (
      <div>
         <img src={img} alt="img" className={s.topImg}/>
      </div>  
   )
 
}

export default TopImg;