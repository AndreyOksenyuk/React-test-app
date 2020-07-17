import React from 'react';
import s from './News.module.css'

const News = (props) => {
  let state = props.store.getState();
   return ( 
   <div className={s.news}>
      <h1>{state.newsPage.news}</h1>
   </div>
   )
}

export default News;