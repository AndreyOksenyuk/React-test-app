import React from 'react';
import style from './MusicList.module.scss'

const MusicList = ({ songs }) => {

   return (
      <div className={style.MusicList}>
         {songs.length !== 0
            ? <>
               {songs.map((song, i) => {
                  return (
                     <div className={style.item} key={i + '+' + song.id}>
                        <span className={style.num}>{i + 1 + '.'}</span>
                        <img src={song.artist.picture_small} alt="" />
                        <div className={style.description}>
                           <h4 className={style.title} title={song.title}>{song.title}</h4>
                           <p className={style.artistName} title={song.artist.name}>{song.artist.name}</p>
                        </div>
                        <audio controls>
                           <source type="audio/mpeg" src={song.preview} />
                           <p>Ваш браузер не поддерживает аудио</p>
                        </audio>
                     </div>
                  )
               })
               }
            </>
            : <h4 className={style.noSongsText}>Введите в поиск название песни</h4>
         }

      </div>
   );
}

export default MusicList;
