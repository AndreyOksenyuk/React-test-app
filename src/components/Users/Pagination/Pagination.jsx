import React, { useState } from 'react';
import style from './Pagination.module.scss'

const Pagination = (props) => {

   let pagination = Math.ceil(props.totalUsersCount / props.numberOfUsers);
   let pages = []
   for (let i = 1; i <= pagination; i++) {
      pages.push(i)
   }

   let portitionCount = Math.ceil(pagination / props.portitionSize)
   let [PortitionNumber, setPortitionNamber] = useState(1)
   let leftPortition = (PortitionNumber - 1) * props.portitionSize + 1
   let rigthPortition = PortitionNumber * props.portitionSize

   return (
      <div className={style.pagination}>
         {PortitionNumber > 1 &&
            <button 
               className={style.prev}
               onClick={() => { setPortitionNamber(PortitionNumber - 1) }}
            >&larr;</button>
         }
         <div className={style.paginationPage__wraper}>
            {
               pages
                  .filter(p => p >= leftPortition && p <= rigthPortition)
                  .map(e => {
                     return <span
                        key={e}
                        className={props.numberOfPages === e ? style.pagination__pageActive : style.pagination__page}
                        onClick={() => { props.onSetPage(e) }}
                     >{e}</span>
                  })
            }
         </div>

         {portitionCount > PortitionNumber &&
            <button 
            className={style.next}
               onClick={() => { setPortitionNamber(PortitionNumber + 1) }}
            >&rarr;</button>
         }

      </div>
   );
}

export default Pagination;
