import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile} from '../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

   componentDidMount(){
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2;
      }
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then(response => this.props.setUserProfile(response.data))
   }

   render() {
      return <Profile {...this.props}/>
   }
}

const mapStateToProps = (state) => ({
   User: state.profilePage.User,
})

const UrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
   setUserProfile
})(UrlDataContainerComponent)