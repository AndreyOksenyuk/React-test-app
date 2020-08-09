import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setErroTC } from '../../Redux/App-reducer';
import SocialNetworkApp from './index';

const SocialNetworkAppContainer = (props) => {

   let catchAllUnhandledError = (e) => {
      props.setErroTC(e.reason.toJSON().name, e.reason.toJSON().message)
   }

   useEffect(() => {
      window.addEventListener('unhandledrejection', catchAllUnhandledError)
      return () => {
         window.removeEventListener('unhandledrejection', catchAllUnhandledError)
      }
   })

   return <SocialNetworkApp {...props}/>
}

let mapStateToProps = (state) => ({
   error: state.App.Error,
   textError: state.App.textError,
})

export default compose(

   connect(mapStateToProps, {
      setErroTC,
   })
)(SocialNetworkAppContainer)


