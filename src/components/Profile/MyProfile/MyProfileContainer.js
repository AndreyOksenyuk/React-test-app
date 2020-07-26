import React from 'react';
import MyProfile from './MyProfile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getUserProfileThankCreator } from '../../../Redux/profile-reducer';
import { authMeThankCreator } from '../../../Redux/auth-reducer';
//import {withAuthRedirect} from '../../../hoc/withAuthRedirect';

class MyProfileContainer extends React.Component {
   componentDidMount(){  
         setTimeout(() => {
            this.props.getMyProfile(this.props.id)
         }, 1000);
         this.props.authMeThankCreator()    
   }
   render() {
      return <MyProfile {...this.props}/>
   }
}

let mapStateToProps = (state) => {
   return {
      user: state.profilePage.User,
      id: state.auth.id,
      email: state.auth.email,
   }
}

export default compose(
   withRouter,
   //withAuthRedirect,
   connect(mapStateToProps, {
      getMyProfile: getUserProfileThankCreator,
      authMeThankCreator,
   }),
)(MyProfileContainer)
