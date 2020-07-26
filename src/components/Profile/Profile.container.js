import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
   FollowToggle,
   getUserProfileThankCreator,
   getFollowThankCreator,
   getUserStatus,
} from '../../Redux/profile-reducer'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   
   componentDidMount(){
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 9482;
      }
      this.props.getUserStatus(userId)
      this.props.getUserProfile(userId)
      this.props.getFollow(userId)
   }

   render() {
      return <Profile {...this.props} followedUser={this.props.followedUser}/>
   }
}

const mapStateToProps = (state) => ({
   User: state.profilePage.User,
   userStatus: state.profilePage.userStatus,
   followedUser: state.profilePage.followedUser,
   authorization: state.auth.login,
})


export default compose(
   withRouter,
   connect(mapStateToProps, {
      getUserProfile: getUserProfileThankCreator,
      getFollow: getFollowThankCreator,
      getUserStatus,
      FollowToggle,
   }),
)(ProfileContainer)