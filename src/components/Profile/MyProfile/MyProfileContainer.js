import React from 'react';
import MyProfile from './MyProfile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getUserProfileThankCreator, getUserStatus, changeValueMyStatus } from '../../../Redux/profile-reducer';
import { authMeThankCreator } from '../../../Redux/auth-reducer';
import Preloader from '../../module/preloader'
//import {withAuthRedirect} from '../../../hoc/withAuthRedirect';

class MyProfileContainer extends React.Component {    
      state = {
         preloader: true,
      }
   componentDidMount(){  
         setTimeout(() => {
            this.props.getUserStatus(this.props.id) 
            this.props.getMyProfile(this.props.id)
            this.setState({preloader: false})
         }, 2000);
         this.props.authMeThankCreator()   
   }
   render() {     
      if (this.state.preloader) {
         return <Preloader />
      }
      return <MyProfile {...this.props}/>
   }
}

let mapStateToProps = (state) => {
   return {
      user: state.profilePage.User,
      myStatus: state.profilePage.userStatus,
      id: state.auth.id,
      email: state.auth.email,
   }
}

export default compose(
   withRouter,
   //withAuthRedirect,
   connect(mapStateToProps, {
      getMyProfile: getUserProfileThankCreator,
      authMeThankCreator, getUserStatus, changeValueMyStatus,
   }),
)(MyProfileContainer)
