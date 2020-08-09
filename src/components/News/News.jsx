import React from 'react';
import style from './News.module.scss'
import NewsPost from './NewsPost/NewsPost';

const News = (props) => {
   return ( 
      <div className={style.News}>
         <NewsPost news={props.news}/>
      </div>         
   )
}

export default News;