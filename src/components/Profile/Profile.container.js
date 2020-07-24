import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setFollowedUser,} from '../../Redux/profile-reducer'
import {follow, unfollow,} from '../../Redux/users-reducer'
import { withRouter } from 'react-router-dom';
import {getUserProfile, getFollow} from '../../api'

class ProfileContainer extends React.Component {

   componentDidMount(){
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 9482;
      }
      getUserProfile(userId).then(data => this.props.setUserProfile(data));
      getFollow(userId).then(data => this.props.setFollowedUser(data))
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
   setUserProfile, setFollowedUser, 
   follow, unfollow, 
})(UrlDataContainerComponent)