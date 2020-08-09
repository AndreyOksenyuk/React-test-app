import React from 'react';
import style from './Music.module.scss'
import MusicList from './MusicList';
import SearchMusic from './SearchMusicForm';
import { useState } from 'react';

const Music = (props) => {
   let [index, setIndex] = useState(props.limit)

   let submitSerchMusic = (value) => {
      props.setMusicSearchTC(value.music, props.limit)
      props.setValueSearch(value.music)
   }

   let onShoeMore = () => {
      setIndex(index + props.limit)
      props.addMoreMusicTC(props.valueSearch, props.limit, index)
   }


   return (
      <div className={style.Music}>
         <SearchMusic onSubmit={submitSerchMusic} />
         <MusicList songs={props.songs} />

         {props.songs.length !== 0 && <button
            onClick={onShoeMore}
            className={style.showMoreBtn}
            disabled={props.isFeatching}
         >
            {props.isFeatching
               ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
               : <i>Показать больше</i>
            }
         </button>
         }

      </div>
   )
}

export default Music;