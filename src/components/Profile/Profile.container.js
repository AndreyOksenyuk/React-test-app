import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
   FollowToggle,
   getUserProfileThankCreator,
   getFollowThankCreator,
   getUserStatus,
   setUserIdProfile,
} from '../../Redux/profile-reducer'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   
   componentDidMount(){
      var userId = this.props.match.params.userId;
      this.props.getUserStatus(userId)
      this.props.getUserProfile(userId)
      this.props.getFollow(userId)
      this.props.setUserIdProfile(userId)
   }

   render() {
      return <Profile {...this.props} followedUser={this.props.followedUser}/> 
   }
}

const mapStateToProps = (state) => ({
   User: state.profilePage.User,
   userStatus: state.profilePage.userStatus,
   followedUser: state.profilePage.followedUser,
   isPutData: state.profilePage.isPutData,
   authorization: state.auth.login,
})


export default compose(
   withRouter,
   connect(mapStateToProps, {
      getUserProfile: getUserProfileThankCreator,
      getFollow: getFollowThankCreator,
      getUserStatus,
      FollowToggle,
      setUserIdProfile,
   }),
)(ProfileContainer)