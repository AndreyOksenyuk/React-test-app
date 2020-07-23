import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile, setFollowedUser,} from '../../Redux/profile-reducer'
import {follow, unfollow,} from '../../Redux/users-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

   componentDidMount(){
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 9482;
      }
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then(response => this.props.setUserProfile(response.data));
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{
            withCredentials: true,
         })
         .then(response => this.props.setFollowedUser(response.data))
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