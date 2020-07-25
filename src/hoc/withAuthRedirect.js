import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component) =>{

   class RedirectComponent extends React.Component {
      render() {
         if (!this.props.authorization) return <Redirect to='/login' />
         return <Component {...this.props} />
      }
   }

   let mapStateToProps = (state) => {
      return {
         authorization: state.auth.login,
      }
   }

   const connectRedirectComponent = connect(mapStateToProps, {})(RedirectComponent)
   return connectRedirectComponent;
}

