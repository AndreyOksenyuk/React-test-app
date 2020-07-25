import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
   FollowToggle,
   getUserProfileThankCreator,
   getFollowThankCreator,
} from '../../Redux/profile-reducer'

class ProfileContainer extends React.Component {
   componentDidMount(){
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 9482;
      }
      this.props.getUserProfile(userId)
      this.props.getFollow(userId)
   }

   render() {
      return <Profile {...this.props} followedUser={this.props.followedUser}/>
   }
}

const mapStateToProps = (state) => ({
   User: state.profilePage.User,
   followedUser: state.profilePage.followedUser,
})

const UrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
   getUserProfile: getUserProfileThankCreator,
   getFollow: getFollowThankCreator,
   FollowToggle,
})(UrlDataContainerComponent)