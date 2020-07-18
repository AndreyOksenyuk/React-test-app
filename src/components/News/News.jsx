import React from 'react';
import s from './News.module.css'
import StoreContext from '../../StoreContext';

const News = (props) => {
   return ( 
      <StoreContext.Consumer>
         {store => {
            let state = store.getState();
            return (
               <div className={s.news}>
                  <h1>{state.newsPage.news}</h1>
               </div> 
            )
         }}
      </StoreContext.Consumer>

   )
}

export default News;