import React from 'react';
import style from './SearchMusic.module.scss'
import { Field, reduxForm } from 'redux-form';

const SearchMusic = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={style.inputWrapper}>
         <Field 
            name='music'
            type="search" 
            placeholder="Search…" 
            component='input'
            autoComplete="off"
         />
         <button className='Button'>Поиск</button>
      </form>
   );
}

const SearchMusicReduxForm = reduxForm({
   form: 'searchMusic'
})(SearchMusic)

export default SearchMusicReduxForm;
