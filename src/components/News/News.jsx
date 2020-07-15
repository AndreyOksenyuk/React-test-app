import React from 'react';
import s from './News.module.css'


const News = (props) => {
   console.log(props);
   return ( 
   <div className={s.news}>
      <h1>{props.state.newsPage.news}</h1>
   </div>
   )
}

export default News;