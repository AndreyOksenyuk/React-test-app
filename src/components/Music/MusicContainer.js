import React from 'react';
import Music from './Music';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setMusicSearchTC, setValueSearch, addMoreMusicTC } from '../../Redux/music-reducer'

const MusicContainer = (props) => {
   return <Music {...props}/>
}

const mapStateToProps = (state) => ({
   songs: state.musicPage.songs,
   limit: state.musicPage.limit,
   totalCount: state.musicPage.totalCount,
   valueSearch: state.musicPage.valueSearch,
   showMoreUrl: state.musicPage.showMoreUrl,
   isFeatching: state.musicPage.isFeatching,
})

export default compose(
   connect(mapStateToProps, {
      setMusicSearchTC, setValueSearch, addMoreMusicTC
   })
)(MusicContainer);
